<!-- App.vue -->
<template>
  <div id="app">
    <b-navbar toggleable="lg" class="glass-navbar fixed-top">
      <div class="container">
        <b-navbar-brand to="/home" class="brand">
          <i class="fas fa-chart-line"></i>
          Gestor Financiero
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Navegación principal -->
          <b-navbar-nav class="mr-auto">
            <b-nav-item to="/home">Inicio</b-nav-item>
            <b-nav-item @click="scrollToSection('como-funciona')" v-if="$route.path === '/home'">Cómo Funciona</b-nav-item>
            <b-nav-item @click="scrollToSection('precios')" v-if="$route.path === '/home'">Precios</b-nav-item>
            <b-nav-item @click="scrollToSection('sobre-nosotros')" v-if="$route.path === '/home'">Nosotros</b-nav-item>
            <b-nav-item @click="scrollToSection('contacto')" v-if="$route.path === '/home'">Contacto</b-nav-item>
            
            <!-- Navegación para usuarios autenticados -->
            <template v-if="usuarioAutenticado">
              <b-nav-item to="/ingresador">Transacciones</b-nav-item>
              <b-nav-item to="/reporte">Reportes</b-nav-item>
            </template>
          </b-navbar-nav>

          <!-- Botones de autenticación -->
          <b-navbar-nav class="ml-auto">
            <template v-if="!usuarioAutenticado">
              <b-nav-item @click="scrollToSection('registro')" v-if="$route.path === '/home'" class="nav-cta">
                <i class="fas fa-user-plus"></i>
                Registrarse
              </b-nav-item>
              <b-nav-item to="/usuario" class="nav-login">
                <i class="fas fa-sign-in-alt"></i>
                Iniciar Sesión
              </b-nav-item>
            </template>
            
            <template v-else>
              <!-- Dropdown de usuario autenticado -->
              <b-nav-item-dropdown right>
                <template #button-content>
                  <i class="fas fa-user-circle"></i>
                  {{ nombreUsuario }}
                </template>
                <b-dropdown-item to="/usuario">
                  <i class="fas fa-user"></i>
                  Mi Perfil
                </b-dropdown-item>
                <b-dropdown-item @click="cerrarSesion">
                  <i class="fas fa-sign-out-alt"></i>
                  Cerrar Sesión
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </template>
            
            <!-- Botón de ayuda siempre visible -->
            <b-nav-item to="/ayuda" class="nav-help">
              <i class="fas fa-question-circle"></i>
              <span class="d-none d-md-inline">Ayuda</span>
            </b-nav-item>
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
  data() {
    return {
      usuarioAutenticado: false,
      nombreUsuario: ''
    };
  },
  created() {
    this.verificarAutenticacion();
  },
  watch: {
    '$route'() {
      this.verificarAutenticacion();
    }
  },
  methods: {
    verificarAutenticacion() {
      const usuarioGuardado = localStorage.getItem('usuario');
      if (usuarioGuardado) {
        try {
          const usuario = JSON.parse(usuarioGuardado);
          this.usuarioAutenticado = true;
          this.nombreUsuario = usuario.nombre || 'Usuario';
        } catch (e) {
          localStorage.removeItem('usuario');
          this.usuarioAutenticado = false;
        }
      } else {
        this.usuarioAutenticado = false;
      }
    },
    
    scrollToSection(sectionId) {
      // Solo funciona si estamos en la página home
      if (this.$route.path !== '/home') {
        this.$router.push('/home').then(() => {
          this.$nextTick(() => {
            this.scrollToElement(sectionId);
          });
        });
      } else {
        this.scrollToElement(sectionId);
      }
    },
    
    scrollToElement(sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 80; // Altura aproximada del navbar
          const elementPosition = element.offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    },
    
    cerrarSesion() {
      localStorage.removeItem('usuario');
      this.usuarioAutenticado = false;
      this.nombreUsuario = '';
      this.$router.push('/home');
      
      // Mostrar mensaje de confirmación
      this.$bvToast.toast('Has cerrado sesión correctamente', {
        title: 'Sesión Cerrada',
        variant: 'success',
        solid: true
      });
    }
  }
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
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1030;
}

.glass-navbar.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.brand {
  font-weight: 700;
  color: var(--primary-color) !important;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.brand:hover {
  color: var(--secondary-color) !important;
  text-decoration: none;
}

.brand i {
  font-size: 1.8rem;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.navbar-nav .nav-link {
  color: var(--text-color) !important;
  font-weight: 500;
  margin: 0 8px;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 25px;
}

.navbar-nav .nav-link:hover {
  color: var(--primary-color) !important;
  background: rgba(102, 126, 234, 0.1);
  transform: translateY(-1px);
}

.navbar-nav .router-link-active {
  color: var(--primary-color) !important;
  background: rgba(102, 126, 234, 0.15);
  font-weight: 600;
}

/* Estilos especiales para botones CTA */
.nav-cta {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)) !important;
  border-radius: 25px;
  margin: 0 5px;
}

.nav-cta .nav-link {
  color: white !important;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
}

.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.nav-login .nav-link {
  border: 2px solid var(--primary-color);
  color: var(--primary-color) !important;
  font-weight: 600;
  border-radius: 25px;
  padding: 0.5rem 1.5rem;
  margin: 0 5px;
}

.nav-login:hover .nav-link {
  background: var(--primary-color);
  color: white !important;
}

.nav-help .nav-link {
  color: var(--text-light) !important;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
}

.nav-help:hover .nav-link {
  background: rgba(102, 126, 234, 0.1);
  color: var(--primary-color) !important;
}

/* Dropdown de usuario */
.dropdown-toggle::after {
  display: none;
}

.dropdown-menu {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
  margin-top: 10px;
}

.dropdown-item {
  color: var(--text-color);
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
}

.dropdown-item:hover {
  background: rgba(102, 126, 234, 0.1);
  color: var(--primary-color);
}

.dropdown-item i {
  width: 16px;
  text-align: center;
}

.page-container {
  margin-top: 80px; /* Espacio para el navbar fijo */
}

/* Responsive Design */
@media (max-width: 991px) {
  .glass-navbar {
    background: rgba(255, 255, 255, 0.98) !important;
  }
  
  .navbar-collapse {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    margin-top: 10px;
    padding: 1rem;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
  }
  
  .navbar-nav .nav-link {
    margin: 5px 0;
    text-align: center;
  }
  
  .nav-cta,
  .nav-login {
    margin: 10px 0;
  }
  
  .brand {
    font-size: 1.3rem;
  }
}

@media (max-width: 576px) {
  .brand {
    font-size: 1.1rem;
  }
  
  .brand span {
    display: none;
  }
  
  .page-container {
    margin-top: 70px;
  }
}

/* Animaciones */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.navbar-collapse.show {
  animation: slideDown 0.3s ease-out;
}

/* Efectos de scroll */
.glass-navbar.scrolled {
  background: rgba(255, 255, 255, 0.98) !important;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
}
</style>
