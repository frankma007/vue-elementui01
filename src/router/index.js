import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "Home1",
      component: () => import('@/pages/home/Home.vue')
    },
    {
      path: "/detail",
      name: "Detail",
      component: () => import('@/pages/detail/Detail.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})