<template>
  <div class="home-component">
    <div class="row">
      <div class="col">
        <div class="feature-card glass-card">
          <h2 class="feature-title">Tu Centro de Control Financiero</h2>
          <p>En {{ platformName }}, entendemos la importancia de mantener un control eficiente de tus finanzas para lograr tus metas y sueños.</p>
          <p>Nuestro intuitivo sistema te permite tener una visión clara de tu situación financiera en tiempo real.</p>
          <router-link to="/ingresador" class="btn-primary">Gestionar Finanzas</router-link>
        </div>
      </div>
      <div class="col">
        <div class="feature-card glass-card">
          <h2 class="feature-title">Resumen Detallado de Tus Gastos</h2>
          <p>Accede a un resumen detallado de tus gastos. Nuestra plataforma genera informes personalizados que te ofrecen una visión completa de tus hábitos de gasto.</p>
          <p>Establece presupuestos mensuales y toma el control total de tu situación financiera.</p>
          <router-link to="/reporte" class="btn-primary">Ver Reportes</router-link>
        </div>
      </div>
    </div>

    <div class="image-gallery">
      <div class="gallery-item glass-card">
        <img src="@/assets/imagen1.jpg" alt="Image 1" />
      </div>
      <div class="gallery-item glass-card">
        <img src="@/assets/imagen2.jpg" alt="Image 2" />
      </div>
      <div class="gallery-item glass-card">
        <img src="@/assets/imagen3.jpg" alt="Image 3" />
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      platformName: 'Gestor Financiero',
    };
  },
};
</script>
  
<style scoped>
.home-component {
  text-align: left;
}

.feature-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
}

.feature-title {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-weight: 600;
}

.image-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
}

.gallery-item {
  flex: 0 0 calc(33.333% - 20px);
  margin-bottom: 30px;
  overflow: hidden;
  padding: 0;
}

.gallery-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .gallery-item {
    flex: 0 0 100%;
  }
}
</style>
  