<template class="containeri">
  <div class="form-container">
    <h1>Gestor Financiero</h1>
    <form @submit.prevent="addTransaction">
      <div class="form-group">
        <label for="descripcion">Descripción:</label>
        <input v-model="newTransaction.descripcion" type="text" id="descripcion" required>
      </div>
      <div class="form-group">
        <label for="monto">Cantidad (recuerda ingresar el signo correspondiente):</label>
        <input v-model.number="newTransaction.monto" type="number" id="monto" required>
      </div>
      <div class="form-group">
        <label for="categoria">Categoría:</label>
        <select v-model="newTransaction.categoria" id="categoria" required>
          <option value="" disabled>Selecciona una categoría</option>
          <option v-for="categoria in TransaccionCategoria" :key="categoria">{{ categoria }}</option>
        </select>
      </div>
      <div class="form-group">
      <label for="fecha">Fecha:</label>
      <datepicker v-model="newTransaction.fecha" :format="customFormat"></datepicker>
    </div>

      <div class="form-group">
        <button type="submit">{{ editarIndex === -1 ? 'Agregar' : 'Guardar' }}</button>
        <button type="button" @click="cancelEdit" v-if="editarIndex !== -1" class="cancel">Cancelar</button>
      </div>
    </form>

    <div>
      <h2>Transacciones</h2>
      <ul>
        <li v-for="(transaction, index) in transactions" :key="index">
          <span :class="transaction.tipo === 'expense' ? 'expense' : 'income'">{{ transaction.tipo === 'expense' ? '-' : '+' }}{{ transaction.monto }}</span>
          {{ transaction.descripcion }} ({{ new Date(transaction.fecha).toLocaleDateString() }})
          <button @click="editTransaction(index)">Editar</button>
          <button @click="deleteTransaction(index)">Eliminar</button>
        </li>
      </ul>
      <div class="total">
        <span>Total:</span>
        <span :class="total >= 0 ? 'income' : 'expense'">{{ total }}</span>
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
        alert('Debes ingresar una fecha (no me funciona el require)');
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

</style>
