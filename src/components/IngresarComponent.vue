<template>
  <div class="ingreso-container">
    <div class="glass-card">
      <h2 class="section-title">💰 Gestión Financiera</h2>
      
      <!-- Formulario de nueva transacción -->
      <div class="form-section glass-card">
        <h3>{{ editando ? 'Editar Transacción' : 'Nueva Transacción' }}</h3>
        <form @submit.prevent="guardarTransaccion" class="transaction-form">
          <div class="form-row">
            <div class="form-group">
              <label for="descripcion">Descripción</label>
              <input 
                type="text" 
                id="descripcion"
                v-model="transaccion.descripcion" 
                required 
                placeholder="Ej: Compra de supermercado"
              >
            </div>
            <div class="form-group">
              <label for="monto">Monto</label>
              <input 
                type="number" 
                id="monto"
                v-model="transaccion.monto" 
                step="0.01" 
                min="0.01" 
                required 
                placeholder="0.00"
              >
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="tipo">Tipo</label>
              <select id="tipo" v-model="transaccion.tipo" required>
                <option value="">Seleccionar tipo</option>
                <option value="ingreso">💰 Ingreso</option>
                <option value="gasto">💸 Gasto</option>
              </select>
            </div>
            <div class="form-group">
              <label for="categoria">Categoría</label>
              <select id="categoria" v-model="transaccion.categoria" required>
                <option value="">Seleccionar categoría</option>
                <optgroup label="Ingresos" v-if="transaccion.tipo === 'ingreso'">
                  <option value="salario">Salario</option>
                  <option value="freelance">Freelance</option>
                  <option value="inversiones">Inversiones</option>
                  <option value="otros_ingresos">Otros</option>
                </optgroup>
                <optgroup label="Gastos" v-if="transaccion.tipo === 'gasto'">
                  <option value="alimentacion">Alimentación</option>
                  <option value="transporte">Transporte</option>
                  <option value="entretenimiento">Entretenimiento</option>
                  <option value="salud">Salud</option>
                  <option value="educacion">Educación</option>
                  <option value="servicios">Servicios</option>
                  <option value="otros_gastos">Otros</option>
                </optgroup>
              </select>
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="fecha">Fecha</label>
              <input 
                type="date" 
                id="fecha"
                v-model="transaccion.fecha" 
                required
              >
            </div>
          </div>
          
          <div class="form-actions">
            <button type="submit" class="btn-primary" :disabled="cargando">
              {{ cargando ? 'Guardando...' : (editando ? 'Actualizar' : 'Guardar') }}
            </button>
            <button 
              type="button" 
              class="btn-secondary" 
              @click="cancelarEdicion"
              v-if="editando"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
      
      <!-- Resumen financiero -->
      <div class="summary-section glass-card" v-if="resumen">
        <h3>📊 Resumen Financiero</h3>
        <div class="summary-cards">
          <div class="summary-card income">
            <div class="summary-icon">💰</div>
            <div class="summary-content">
              <span class="summary-label">Ingresos</span>
              <span class="summary-amount">${{ formatearMonto(resumen.total_ingresos) }}</span>
            </div>
          </div>
          <div class="summary-card expense">
            <div class="summary-icon">💸</div>
            <div class="summary-content">
              <span class="summary-label">Gastos</span>
              <span class="summary-amount">${{ formatearMonto(resumen.total_gastos) }}</span>
            </div>
          </div>
          <div class="summary-card balance" :class="{ negative: resumen.balance < 0 }">
            <div class="summary-icon">📈</div>
            <div class="summary-content">
              <span class="summary-label">Balance</span>
              <span class="summary-amount">${{ formatearMonto(resumen.balance) }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Lista de transacciones -->
      <div class="transactions-section glass-card">
        <h3>📋 Historial de Transacciones</h3>
        
        <div v-if="cargandoTransacciones" class="loading">
          Cargando transacciones...
        </div>
        
        <div v-else-if="transacciones.length === 0" class="empty-state">
          <p>No hay transacciones registradas</p>
          <p>¡Comienza agregando tu primera transacción!</p>
        </div>
        
        <div v-else class="transactions-list">
          <div 
            v-for="item in transacciones" 
            :key="item.id" 
            class="transaction-item"
            :class="item.tipo"
          >
            <div class="transaction-info">
              <div class="transaction-header">
                <span class="transaction-description">{{ item.descripcion }}</span>
                <span class="transaction-amount" :class="item.tipo">
                  {{ item.tipo === 'ingreso' ? '+' : '-' }}${{ formatearMonto(item.monto) }}
                </span>
              </div>
              <div class="transaction-details">
                <span class="transaction-category">{{ formatearCategoria(item.categoria) }}</span>
                <span class="transaction-date">{{ formatearFecha(item.fecha) }}</span>
              </div>
            </div>
            <div class="transaction-actions">
              <button 
                @click="editarTransaccion(item)" 
                class="btn-edit"
                title="Editar"
              >
                ✏️
              </button>
              <button 
                @click="eliminarTransaccion(item.id)" 
                class="btn-delete"
                title="Eliminar"
              >
                🗑️
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IngresarComponent',
  data() {
    return {
      transaccion: {
        descripcion: '',
        monto: '',
        tipo: '',
        categoria: '',
        fecha: new Date().toISOString().split('T')[0]
      },
      transacciones: [],
      resumen: null,
      cargando: false,
      cargandoTransacciones: false,
      editando: false,
      transaccionEditando: null
    }
  },
  mounted() {
    this.cargarTransacciones();
  },
  methods: {
    async cargarTransacciones() {
      const usuario = JSON.parse(localStorage.getItem('usuario'));
      if (!usuario) {
        this.$router.push('/usuario');
        return;
      }
      
      this.cargandoTransacciones = true;
      
      try {
        const response = await fetch(`http://localhost/api/finanzas/todos.php?usuario_id=${usuario.usuario_id}`);
        const data = await response.json();
        
        if (data.exito) {
          this.transacciones = data.datos.transacciones;
          this.resumen = data.datos.resumen;
        } else {
          alert('Error al cargar transacciones: ' + data.mensaje);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error de conexión al cargar transacciones');
      } finally {
        this.cargandoTransacciones = false;
      }
    },
    
    async guardarTransaccion() {
      const usuario = JSON.parse(localStorage.getItem('usuario'));
      if (!usuario) {
        this.$router.push('/usuario');
        return;
      }
      
      this.cargando = true;
      
      const datosTransaccion = {
        ...this.transaccion,
        usuario_id: usuario.usuario_id
      };
      
      if (this.editando) {
        datosTransaccion.id = this.transaccionEditando.id;
      }
      
      try {
        const url = this.editando 
          ? 'http://localhost/api/finanzas/actualizar.php'
          : 'http://localhost/api/finanzas/guardar.php';
          
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(datosTransaccion)
        });
        
        const data = await response.json();
        
        if (data.exito) {
          alert(this.editando ? 'Transacción actualizada exitosamente' : 'Transacción guardada exitosamente');
          this.limpiarFormulario();
          this.cargarTransacciones();
        } else {
          alert('Error: ' + data.mensaje);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error de conexión');
      } finally {
        this.cargando = false;
      }
    },
    
    async eliminarTransaccion(id) {
      if (!confirm('¿Estás seguro de que quieres eliminar esta transacción?')) {
        return;
      }
      
      const usuario = JSON.parse(localStorage.getItem('usuario'));
      
      try {
        const response = await fetch('http://localhost/api/finanzas/eliminar.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: id,
            usuario_id: usuario.usuario_id
          })
        });
        
        const data = await response.json();
        
        if (data.exito) {
          alert('Transacción eliminada exitosamente');
          this.cargarTransacciones();
        } else {
          alert('Error: ' + data.mensaje);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error de conexión');
      }
    },
    
    editarTransaccion(transaccion) {
      this.editando = true;
      this.transaccionEditando = transaccion;
      this.transaccion = {
        descripcion: transaccion.descripcion,
        monto: transaccion.monto,
        tipo: transaccion.tipo,
        categoria: transaccion.categoria,
        fecha: transaccion.fecha
      };
      
      // Scroll al formulario
      document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
    },
    
    cancelarEdicion() {
      this.editando = false;
      this.transaccionEditando = null;
      this.limpiarFormulario();
    },
    
    limpiarFormulario() {
      this.transaccion = {
        descripcion: '',
        monto: '',
        tipo: '',
        categoria: '',
        fecha: new Date().toISOString().split('T')[0]
      };
      this.editando = false;
      this.transaccionEditando = null;
    },
    
    formatearMonto(monto) {
      return parseFloat(monto).toLocaleString('es-ES', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    
    formatearFecha(fecha) {
      return new Date(fecha + 'T00:00:00').toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    },
    
    formatearCategoria(categoria) {
      const categorias = {
        'salario': 'Salario',
        'freelance': 'Freelance',
        'inversiones': 'Inversiones',
        'otros_ingresos': 'Otros Ingresos',
        'alimentacion': 'Alimentación',
        'transporte': 'Transporte',
        'entretenimiento': 'Entretenimiento',
        'salud': 'Salud',
        'educacion': 'Educación',
        'servicios': 'Servicios',
        'otros_gastos': 'Otros Gastos'
      };
      return categorias[categoria] || categoria;
    }
  }
}
</script>

<style scoped>
.ingreso-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-primary);
  font-size: 2rem;
  font-weight: 600;
}

.form-section {
  margin-bottom: 2rem;
}

.transaction-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-primary);
}

.form-group input,
.form-group select {
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--primary-color);
  background: rgba(255, 255, 255, 0.15);
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

.summary-section {
  margin-bottom: 2rem;
}

.summary-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.summary-card {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.summary-card:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.15);
}

.summary-card.income {
  border-left: 4px solid #10b981;
}

.summary-card.expense {
  border-left: 4px solid #ef4444;
}

.summary-card.balance {
  border-left: 4px solid #3b82f6;
}

.summary-card.balance.negative {
  border-left-color: #ef4444;
}

.summary-icon {
  font-size: 2rem;
  margin-right: 1rem;
}

.summary-content {
  display: flex;
  flex-direction: column;
}

.summary-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
}

.summary-amount {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
}

.transactions-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.transaction-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.transaction-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(4px);
}

.transaction-item.ingreso {
  border-left: 4px solid #10b981;
}

.transaction-item.gasto {
  border-left: 4px solid #ef4444;
}

.transaction-info {
  flex: 1;
}

.transaction-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.transaction-description {
  font-weight: 500;
  color: var(--text-primary);
}

.transaction-amount {
  font-weight: 600;
  font-size: 1.1rem;
}

.transaction-amount.ingreso {
  color: #10b981;
}

.transaction-amount.gasto {
  color: #ef4444;
}

.transaction-details {
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.transaction-actions {
  display: flex;
  gap: 0.5rem;
}

.btn-edit,
.btn-delete {
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.btn-edit:hover {
  background: rgba(59, 130, 246, 0.2);
}

.btn-delete:hover {
  background: rgba(239, 68, 68, 0.2);
}

.loading,
.empty-state {
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
}

.empty-state p {
  margin: 0.5rem 0;
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .summary-cards {
    grid-template-columns: 1fr;
  }
  
  .transaction-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .transaction-details {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>
