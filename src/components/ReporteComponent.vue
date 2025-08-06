<template>
  <div class="report-container">
    <div class="filter-section glass-card">
      <div class="filter-group">
        <label for="monthFilter">Filtrar por mes:</label>
        <select v-model="monthFilter" id="monthFilter" class="form-control">
          <option value="">Todos los meses</option>
          <option v-for="(month, index) in monthOptions" :value="index + 1" :key="'month-' + index">{{ month }}</option>
        </select>
      </div>
    </div>
    
    <div class="summary-cards row">
      <div class="col">
        <div class="glass-card summary-card income">
          <div class="summary-icon">💰</div>
          <div class="summary-content">
            <h3>Total Ingresos</h3>
            <div class="summary-amount">{{ formatCurrency(totalIncome) }}</div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="glass-card summary-card expense">
          <div class="summary-icon">💸</div>
          <div class="summary-content">
            <h3>Total Gastos</h3>
            <div class="summary-amount">{{ formatCurrency(totalExpenses) }}</div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="glass-card summary-card balance">
          <div class="summary-icon">⚖️</div>
          <div class="summary-content">
            <h3>Balance</h3>
            <div class="summary-amount" :class="totalIncome - totalExpenses >= 0 ? 'positive' : 'negative'">
              {{ formatCurrency(totalIncome - totalExpenses) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="glass-card data-table">
      <h3 class="table-title">Detalle por Período</h3>
      <table class="report-table">
        <thead>
          <tr>
            <th>Año</th>
            <th>Mes</th>
            <th>Ingresos</th>
            <th>Gastos</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in reportData" :key="'row-' + index" class="data-row">
            <td :key="'year-' + index">{{ item.year }}</td>
            <td :key="'month-' + index">{{ monthOptions[parseInt(formatMonth(item.month)) - 1] }}</td>
            <td :key="'income-' + index" class="income">{{ formatCurrency(item.income) }}</td>
            <td :key="'expenses-' + index" class="expense">{{ formatCurrency(item.expenses) }}</td>
            <td :key="'balance-' + index" :class="item.income - item.expenses >= 0 ? 'positive' : 'negative'">
              {{ formatCurrency(item.income - item.expenses) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    transactions: Array,
  },
  data() {
    return {
      monthFilter: '',
      monthOptions: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ],
    };
  },
  computed: {
    // Filtra las transacciones basadas en el filtro de mes
    filteredTransactions() {
      let trans = JSON.parse(localStorage.getItem('transactions')) || [];
      return trans.filter(transaction => {
        if (!this.monthFilter) {
          return true;
        }
        const date = new Date(transaction.fecha);
        const selectedMonth = this.monthOptions[this.monthFilter - 1];
        const transactionMonth = this.monthOptions[date.getMonth()];
        return selectedMonth === transactionMonth;
      });
    },
  
    reportData() {
      const report = {};
  
      // Agrupa las transacciones por mes y tipo
      this.filteredTransactions.forEach(transaction => {
        const date = new Date(transaction.fecha);
        const year = date.getFullYear();
        const month = date.getMonth();
        const key = `${year}-${month}`;
  
        if (!report[key]) {
          report[key] = { year, month, income: 0, expenses: 0, categoryExpenses: {} };
        }
        if (transaction.tipo === 'income') {
          report[key].income += parseFloat(transaction.monto);
        } else if (transaction.tipo === 'expense') {
          report[key].expenses += parseFloat(transaction.monto);
          // Agrupa los gastos por categoría
          if (!report[key].categoryExpenses[transaction.categoria]) {
            report[key].categoryExpenses[transaction.categoria] = 0;
          }
          report[key].categoryExpenses[transaction.categoria] += parseFloat(transaction.monto);
        }
      });
  
      // Convierte el objeto en un array de objetos y ordena por año y mes
      return Object.values(report).sort((a, b) => {
        if (a.year === b.year) {
          return a.month - b.month;
        }
        return a.year - b.year;
      });
    },
    totalIncome() {
      return this.reportData.reduce((total, item) => total + item.income, 0);
    },
  
    totalExpenses() {
      return this.reportData.reduce((total, item) => total + item.expenses, 0);
    },
    // Calcula el porcentaje de gastos por categoría
    categoryExpensePercentages() {
      const categoryPercentages = {};
      this.reportData.forEach(item => {
        Object.keys(item.categoryExpenses).forEach(category => {
          const expenses = item.categoryExpenses[category];
          if (!categoryPercentages[category]) {
            categoryPercentages[category] = 0;
          }
          categoryPercentages[category] += (expenses / this.totalExpenses) * 100;
        });
      });
      return categoryPercentages;
    },
  },
  methods: {
    // Esta función formatea el mes para mostrarlo como "MM" en lugar de un número
    formatMonth(month) {
      return (month + 1).toString().padStart(2, '0');
    },
    // Esta función formatea el valor como una moneda (por ejemplo, "$1,000.00")
    formatCurrency(value) {
      return '$' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },
  
    percentageYearMonthMatch(category) {
      const [year, month] = category.split('-');
      return this.monthFilter === '' || (year === String(this.filteredYear) && month === String(this.filteredMonth));
    },
  },
};
</script>
  
<style scoped>
.filter-section {
  margin-bottom: 30px;
  text-align: left;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 15px;
}

.filter-group label {
  font-weight: 500;
  min-width: 120px;
}

.filter-group .form-control {
  max-width: 200px;
}

.summary-cards {
  margin-bottom: 30px;
}

.summary-card {
  display: flex;
  align-items: center;
  padding: 20px;
  height: 100%;
}

.summary-icon {
  font-size: 2rem;
  margin-right: 15px;
}

.summary-content {
  text-align: left;
}

.summary-content h3 {
  margin: 0 0 5px 0;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-color);
}

.summary-amount {
  font-size: 1.5rem;
  font-weight: 700;
}

.income .summary-amount, .positive {
  color: #4cd137;
}

.expense .summary-amount, .negative {
  color: #e84118;
}

.data-table {
  overflow-x: auto;
}

.table-title {
  text-align: left;
  margin-bottom: 20px;
  font-size: 1.2rem;
  color: var(--primary-color);
}

.report-table {
  width: 100%;
  border-collapse: collapse;
}

.report-table th {
  background-color: rgba(108, 92, 231, 0.1);
  padding: 12px 15px;
  text-align: left;
  font-weight: 600;
  color: var(--primary-color);
}

.report-table td {
  padding: 12px 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.data-row:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
  