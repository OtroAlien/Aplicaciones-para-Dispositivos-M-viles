
import Vue from 'vue'
import VueRouter from 'vue-router'
import IngresadorView from '../views/IngresadorView.vue'
import ReporteView from '../views/ReporteView.vue'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import SupportView from '@/views/SupportView.vue'

import 'animate.css';

Vue.use(VueRouter);

// Función para verificar autenticación
const verificarAutenticacion = (to, from, next) => {
  const usuarioGuardado = localStorage.getItem('usuario');
  if (to.meta.requiereAuth && !usuarioGuardado) {
    // Redirigir a la página de login si la ruta requiere autenticación
    next({ name: 'usuario', query: { redirect: to.fullPath } });
  } else {
    next();
  }
};

// Definir las rutas con meta para autenticación
const routes = [
  { path: '/home', name: 'home', component: HomeView },
  { 
    path: '/ingresador', 
    name: 'ingresador', 
    component: IngresadorView,
    meta: { requiereAuth: true }
  },
  { 
    path: '/reporte', 
    name: 'reporte', 
    component: ReporteView,
    meta: { requiereAuth: true }
  },
  { path: '/usuario', name: 'usuario', component: UserView },
  { path: '/ayuda', name: 'ayuda', component: SupportView },
  { path: '/', redirect: '/home' },
];

const router = new VueRouter({
  routes,
});

// Agregar el guard global
router.beforeEach(verificarAutenticacion);

export default router;
