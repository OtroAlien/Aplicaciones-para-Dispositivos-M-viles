<template>
  <div class="containeri">
    <ReporteComponent/>
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
.containeri {
margin: 10px auto;
background-color: #d4d4d4;
padding: 15px;
width: 70%;
border: solid 3px #0e293b;
border-radius: 15px;
box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);
}

h2{
font-size: 16pt;
border: #0e293b solid 2px;
border-radius: 5px;
width: fit-content;
margin: 10px auto;
padding: 10px;
}

label {
margin: 10px;
}

</style>
<template>
<div class="containerr">
  <ReporteComponent/>
  <h2 class="animateanimated animatefadeIn">Aqui verás el reporte de tus cuentas</h2>
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
background-color: #d4d4d4;
padding: 15px;
width: 70%;
border: solid 3px #0e293b;
border-radius: 15px;
box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);
}

h2{
font-size: 16pt;
border: #0e293b solid 2px;
border-radius: 5px;
width: fit-content;
margin: 10px auto;
padding: 10px;
}

</style>