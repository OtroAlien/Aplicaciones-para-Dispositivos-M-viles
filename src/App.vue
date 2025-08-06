<!-- App.vue -->
<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/home">Gestor Financiero</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/home">Home</b-nav-item>
          <b-nav-item to="/ingresador">Ingresador</b-nav-item>
          <b-nav-item to="/reporte">Reporte</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  background-color: #184868 !important;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.navbar-brand{
  margin-left: 10px;
}

.bg-dark{
  background-color: #184868 !important;
}
</style>
