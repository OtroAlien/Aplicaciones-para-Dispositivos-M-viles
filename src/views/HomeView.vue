<template>
  <div>
    <div class="banner">
      <img src="@/assets/banner.jpg" alt="Banner Image" />
    </div>
    <div class="container">
      <h1 class="animate__animated animate__bounce">{{ title }}</h1>
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
.container {
  margin: 10px auto;
  background-color: #d4d4d4;
  padding: 15px;
  width: 70%;
  border: solid 3px #0e293b;
  border-radius: 15px;
  box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);
}

.banner {
  text-align: center;
  margin: auto;
}

.banner img {
  height: 400px;
  width: fit-content;
  margin-top: 20px;
  margin-bottom: 15px;
  border: solid 3px #0e293b;
  border-radius: 15px;
  box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);
}

h1 {
  font-size: 30pt;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  color: #555;
}
</style>
