<template>
  <div class="container">
    <div class="glass-card">
      <h1 class="card-title">Gestión de Transacciones</h1>
      <IngresarComponent />
    </div>
  </div>
</template>

<script>
import IngresarComponent from "@/components/IngresarComponent.vue";

export default {
  name: 'IngresoComponent',
  components: {
    IngresarComponent,
  },
};
</script>

<style scoped>
.card-title {
  margin-bottom: 30px;
  font-size: 2rem;
}
</style>
