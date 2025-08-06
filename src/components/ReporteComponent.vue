<template>
  <div class="report-container">
    <h1>Reporte Financiero</h1>
    <div class="filter-container">
      <label for="monthFilter">Mes:</label>
      <select v-model="monthFilter" id="monthFilter">
        <option value="">Todos</option>
        <option v-for="(month, index) in monthOptions" :value="index + 1" :key="'month-' + index">{{ month }}</option>
      </select>
    </div>
    <table class="report-table">
      <thead>
        <tr>
          <th>Año</th>
          <th>Mes</th>
          <th>Ingresos</th>
          <th>Gastos</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in reportData" :key="'row-' + index">
          <td :key="'year-' + index">{{ item.year }}</td>
          <td :key="'month-' + index">{{ formatMonth(item.month) }}</td>
          <td :key="'income-' + index">{{ formatCurrency(item.income) }}</td>
          <td :key="'expenses-' + index">{{ formatCurrency(item.expenses) }}</td>
        </tr>
      </tbody>
    </table>
    <div class="totals">
      <span>Total Ingresos: {{ formatCurrency(totalIncome) }}</span>
      <span>Total Gastos: {{ formatCurrency(totalExpenses) }}</span>
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
        console.log('trans: ' + JSON.stringify(trans));
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
          console.log(transaction);
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
        console.log('reportData:', this.reportData);
        const total = this.reportData.reduce((total, item) => total + item.income, 0);
        console.log('totalIncome:', total);
        return total;
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
  
  </style>
  