<template>
    <div class="containeri">
      <IngresarComponent />
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
.containeri {
margin: 10px auto;
background-color: #d4d4d4;
padding: 15px;
width: 70%;
border: solid 3px #0e293b;
border-radius: 15px;
box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);
}

label{
    margin: 10px;
}

</style>
