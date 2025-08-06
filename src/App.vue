<!-- App.vue -->
<template>
  <div id="app">
    <b-navbar toggleable="lg" class="glass-navbar">
      <div class="container">
        <b-navbar-brand to="/home" class="brand">Gestor Financiero</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/home">Home</b-nav-item>
            <b-nav-item to="/ingresador">Ingresador</b-nav-item>
            <b-nav-item to="/reporte">Reporte</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  text-align: center;
  color: var(--text-color);
  min-height: 100vh;
}

.glass-navbar {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.brand {
  font-weight: 700;
  color: var(--primary-color) !important;
  font-size: 1.5rem;
}

.navbar-nav .nav-link {
  color: var(--text-color) !important;
  font-weight: 500;
  margin: 0 10px;
  position: relative;
  transition: var(--transition);
}

.navbar-nav .nav-link:after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--primary-color);
  transition: var(--transition);
}

.navbar-nav .nav-link:hover:after,
.navbar-nav .router-link-active:after {
  width: 100%;
}

.navbar-nav .router-link-active {
  color: var(--primary-color) !important;
}

.page-container {
  padding: 30px 0;
}
</style>
