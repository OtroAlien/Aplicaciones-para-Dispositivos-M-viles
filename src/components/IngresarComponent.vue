<template>
  <div class="form-container">
    <div class="row">
      <div class="col">
        <div class="glass-card form-section">
          <h2 class="section-title">Nueva Transacción</h2>
          <form @submit.prevent="addTransaction">
            <div class="form-group">
              <label for="descripcion">Descripción</label>
              <input v-model="newTransaction.descripcion" type="text" id="descripcion" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="monto">Cantidad (con signo)</label>
              <input v-model.number="newTransaction.monto" type="number" id="monto" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="categoria">Categoría</label>
              <select v-model="newTransaction.categoria" id="categoria" class="form-control" required>
                <option value="" disabled>Selecciona una categoría</option>
                <option v-for="categoria in TransaccionCategoria" :key="categoria">{{ categoria }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="fecha">Fecha</label>
              <datepicker v-model="newTransaction.fecha" :format="customFormat" input-class="form-control"></datepicker>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn-primary">{{ editarIndex === -1 ? 'Agregar' : 'Guardar' }}</button>
              <button type="button" @click="cancelEdit" v-if="editarIndex !== -1" class="btn-secondary">Cancelar</button>
            </div>
          </form>
        </div>
      </div>
      
      <div class="col">
        <div class="glass-card transactions-section">
          <h2 class="section-title">Transacciones</h2>
          <div class="transaction-list">
            <div v-for="(transaction, index) in transactions" :key="index" class="transaction-item glass-card">
              <div class="transaction-amount" :class="transaction.tipo === 'expense' ? 'expense' : 'income'">
                {{ transaction.tipo === 'expense' ? '-' : '+' }}{{ transaction.monto }}
              </div>
              <div class="transaction-details">
                <div class="transaction-description">{{ transaction.descripcion }}</div>
                <div class="transaction-date">{{ new Date(transaction.fecha).toLocaleDateString() }}</div>
                <div class="transaction-category">{{ transaction.categoria }}</div>
              </div>
              <div class="transaction-actions">
                <button @click="editTransaction(index)" class="btn-icon edit">✏️</button>
                <button @click="deleteTransaction(index)" class="btn-icon delete">🗑️</button>
              </div>
            </div>
          </div>
          <div class="total-section glass-card">
            <span>Balance Total:</span>
            <span :class="total >= 0 ? 'income' : 'expense'">{{ total }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      transactions: [],
      newTransaction: {
        descripcion: '',
        monto: 0,
        tipo: 'expense',
        categoria: '',
        fecha: '',
      },
      editarIndex: -1,
      TransaccionCategoria: ['Comida', 'Viajes', 'Trabajo', 'Préstamo', 'Otros'],
    };
  },
  computed: {
    total() {
      return this.transactions.reduce((total, transaction) => {
        return transaction.tipo === 'income'
          ? total + parseFloat(transaction.monto)
          : total - parseFloat(transaction.monto);
      }, 0).toFixed(2);
    },
  },
  methods: {
    addTransaction() {
      if (this.newTransaction.fecha) {
        if (this.newTransaction.monto < 0) {
          this.newTransaction.tipo = 'expense';
        } else {
          this.newTransaction.tipo = 'income';
        }
        this.newTransaction.monto = Math.abs(this.newTransaction.monto);

        if (this.editarIndex === -1) {
          this.transactions.push({ ...this.newTransaction });
        } else {
          this.transactions[this.editarIndex] = { ...this.newTransaction };
          this.editarIndex = -1;
        }

        this.newTransaction.descripcion = '';
        this.newTransaction.monto = 0;
        this.newTransaction.categoria = '';
        this.newTransaction.fecha = new Date().toISOString().substr(0, 10); // Set initial date if needed
        this.saveTransactionsToLocalStorage();
      } 
      else {
        alert('Debes ingresar una fecha');
      }
    },
    editTransaction(index) {
      this.editarIndex = index;
      this.newTransaction = { ...this.transactions[index] };
    },
    cancelEdit() {
      this.editarIndex = -1;
      this.newTransaction = { descripcion: '', monto: 0, tipo: 'expense', categoria: '', fecha: '' };
    },
    deleteTransaction(index) {
      this.transactions.splice(index, 1);
      this.editarIndex = -1;
      this.saveTransactionsToLocalStorage();
    },
    saveTransactionsToLocalStorage() {
      localStorage.setItem('transactions', JSON.stringify(this.transactions));
    },
  },
  mounted() {
    const savedTransactions = localStorage.getItem('transactions');
    if (savedTransactions) {
      this.transactions = JSON.parse(savedTransactions);
    }
  },
};
</script>

<style scoped>
.form-section, .transactions-section {
  height: 100%;
}

.section-title {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 600;
  text-align: left;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--text-color);
}

.form-actions {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 30px;
}

.transaction-list {
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 20px;
}

.transaction-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 15px;
  text-align: left;
}

.transaction-amount {
  font-size: 1.2rem;
  font-weight: 700;
  margin-right: 15px;
  min-width: 80px;
}

.income {
  color: #4cd137;
}

.expense {
  color: #e84118;
}

.transaction-details {
  flex: 1;
}

.transaction-description {
  font-weight: 600;
  margin-bottom: 5px;
}

.transaction-date, .transaction-category {
  font-size: 0.85rem;
  color: #7f8c8d;
}

.transaction-actions {
  display: flex;
  gap: 10px;
}

.btn-icon {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  transition: transform 0.2s ease;
}

.btn-icon:hover {
  transform: scale(1.2);
}

.total-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  font-size: 1.2rem;
  font-weight: 700;
}
</style>
