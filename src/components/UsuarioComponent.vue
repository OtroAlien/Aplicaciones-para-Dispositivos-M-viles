<template>
  <div>
    <h2>Usuarios</h2>
    <ul>
      <li v-for="user in usuarios" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UsuarioComponenet",
  props: {
    usuarios: {
      type: Array,
      required: true
    }
  }
};
</script>
