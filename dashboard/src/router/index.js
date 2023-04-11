import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/Home/HomeView.vue')
const FeedbacksView = () => import('../views/Feedbacks/FeedbacksView.vue')
const CredentialsView = () =>
  import('../views/Credentials/CredentialsView.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: FeedbacksView,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/credentials',
    name: 'Credentials',
    component: CredentialsView,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*', // Regex do Vue Router para caso caia em qualquer rota não definida acima, enviar um redirect
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory('/'),
  routes
})

export default router
