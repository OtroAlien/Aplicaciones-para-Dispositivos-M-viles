
import Vue from 'vue'
import VueRouter from 'vue-router'
import IngresadorView from '../views/IngresadorView.vue'
import ReporteView from '../views/ReporteView.vue'
import HomeView from '../views/HomeView.vue'
import 'animate.css';


Vue.use(VueRouter);

const routes = [
  { path: '/home', name: 'home', component: HomeView },
  { path: '/ingresador', name: 'ingresador', component: IngresadorView },
  { path: '/reporte', name: 'reporte', component: ReporteView },
  { path: '/', redirect: '/home' },
];

const router = new VueRouter({
  routes,
});

export default router;
