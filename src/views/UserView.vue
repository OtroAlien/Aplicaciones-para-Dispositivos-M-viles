<template>
  <div>
    <h1>Perfil de Usuario</h1>
    <!-- Usamos el componente para mostrar la lista -->
    <UsuarioComponent :usuarios="usuarios" />
  </div>
</template>

<script>
import UsuarioComponent from '@/components/UsuarioComponent.vue';

export default {
  name: "UserView",
  components: {
    UsuarioComponent
  },
  data() {
    return {
      usuarios: []
    };
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        this.usuarios = data;
      })
      .catch(error => console.error('Error al cargar usuarios:', error));
  }
};
</script>
