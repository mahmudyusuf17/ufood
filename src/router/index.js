import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Makanan from '../views/Makanan.vue'
import DetailMakanan from '../views/DetailMakanan.vue'
import Keranjang from '../views/Keranjang.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/makanan',
    name: 'Makanan',
    component: Makanan
  },
  {
    path: '/makanan/:id',
    name: 'DetailMakanan',
    component: DetailMakanan
  },
  {
    path: '/keranjang',
    name: 'Keranjang',
    component: Keranjang
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
