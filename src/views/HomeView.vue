<template>
  <div class="container">
    <div class="hero-section glass-card">
      <h1 class="animate__animated animate__fadeIn">{{ title }}</h1>
      <p class="subtitle animate__animated animate__fadeIn animate__delay-1s">Gestiona tus finanzas de manera inteligente</p>
    </div>
    <div class="glass-card content-card">
      <HomeComponent />
    </div>
  </div>
</template>

<script>
import HomeComponent from "@/components/HomeComponent.vue";

export default {
  name: 'HomeView',
  components: {
    HomeComponent,
  },
  data() {
    return {
      title: 'Bienvenido al Gestor Financiero',
      description: 'Explora las funciones de ingreso y reporte para gestionar tus finanzas de manera eficiente.'
    };
  },
};
</script>

<style scoped>
.hero-section {
  text-align: center;
  margin-bottom: 30px;
  padding: 60px 20px;
  background-image: linear-gradient(135deg, rgba(253, 121, 168, 0.2) 0%, rgba(108, 92, 231, 0.2) 100%);
}

.hero-section h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: var(--primary-color);
}

.subtitle {
  font-size: 1.2rem;
  color: var(--text-color);
  max-width: 600px;
  margin: 0 auto;
}

.content-card {
  margin-bottom: 30px;
}
</style>
