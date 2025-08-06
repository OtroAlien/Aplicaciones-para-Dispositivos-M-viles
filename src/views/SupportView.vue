<template>
  <div class="support-container">
    <h1>Centro de Ayuda</h1>
    
    <!-- Agregar el componente de localStorage aquí -->
    <LocalStorageComponent />
  </div>
</template>

<script>
import LocalStorageComponent from '@/components/LocalStorageComponent.vue';

export default {
  name: 'SupportView',
  components: {
    LocalStorageComponent
  }
};
</script>

<style scoped>
.ayuda-view {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}
</style>
