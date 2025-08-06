<template>
  <div class="containerr">
    <ReporteComponent/>
    <h2 class="animate__animated animate__fadeIn">Aquí verás el reporte de tus cuentas</h2>
  </div>
</template>

<script>
import ReporteComponent from "@/components/ReporteComponent.vue";

export default {
  name: 'ReporteView',
  components: {
    ReporteComponent,
  },
};
</script>

<style scoped>
.containerr {
  margin: 10px auto;
  padding: 15px;
  width: 70%;
  background: rgba(255, 255, 255, 0.25) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: var(--glass-radius);
}

h2 {
  font-size: 16pt;
  border: #0e293b solid 2px;
  border-radius: 5px;
  width: fit-content;
  margin: 10px auto;
  padding: 10px;
}

.card-title {
  margin-bottom: 10px;
  font-size: 2rem;
}

.subtitle {
  color: var(--text-secondary);
  margin-bottom: 30px;
}
</style>