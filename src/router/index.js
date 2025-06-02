import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetalhesView from '../views/DetalhesView.vue'
import CarrinhoView from '../views/CarrinhoView.vue'
import CategoriaView from '../views/CategoriaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/produto/:id',
      name: 'detalhes',
      component: DetalhesView
      
    },
    {
      path: '/carrinho',
      name: 'carrinho',
      component: CarrinhoView
    },
    {
      path: '/categoria/:categoria',
      name: 'categoria',
      component: CategoriaView
    }
  ]
  
  })


export default router