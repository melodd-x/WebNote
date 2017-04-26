import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// 页面中路由分配规则就设置在这里
import Vmain from '@/components/Vmain'
import Vnote from '@/components/Vnote'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vmain',
      component: Vmain
    },
    {
      path: '/note',
      name: 'Vnote',
      component: Vnote
    }
  ]
})
