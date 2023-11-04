import { createRouter, createWebHistory } from 'vue-router'
import TableView from '../views/TableView.vue'
import ItemCard from '../views/ItemCard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TableView
    },
    {
      path: '/item/:id',
      name: 'item',
      component: ItemCard
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/TableView.vue')
    // }
  ]
})

export default router
