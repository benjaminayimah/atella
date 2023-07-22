import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import BookMeeting from '../views/BookMeeting.vue'
import ConfigureView from '../views/ConfigureView.vue'
import ConfigureHome from '@/components/ConfigureHome.vue'
import ConfigureAddress from '@/components/ConfigureAddress.vue'
import ConfigurePayment from '@/components/ConfigurePayment.vue'
import ConfigureAppointment from '@/components/ConfigureAppointment.vue'





const routes = [
  { path: '/', component: ConfigureView,
  children: [
    { path: '/', name: 'ConfigureHome', component: ConfigureHome },
    { path: '/address', name: 'ConfigureAddress', component: ConfigureAddress },
    { path: '/payment', name: 'ConfigurePayment', component: ConfigurePayment },
    { path: '/book-appointment', name: 'ConfigureAppointment', component: ConfigureAppointment },

  ]
},
{ path: '/schedule-a-meeting', name: 'BookMeeting', component: BookMeeting}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
