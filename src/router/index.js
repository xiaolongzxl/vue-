import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import ('@/views/Home')
const jz = () => import ('@/views/jz')
const zd = () => import ('@/views/zd')
const xf = () => import ('@/views/xf')
const zc = () => import ('@/views/zc')

Vue.use(VueRouter)

  const routes = [
    {
      path:'',
      redirect:'/home'
    },
   {
     path:'/home',
     component:Home,
     meta:{
      title:'首页'
     }
   },
   {
    path:'/jz',
    component:jz,
    meta:{
      title:'记账'
    }
  },
   {
    path:'/zd',
    component:zd,
    meta:{
      title:'账单'
    }
  },
  {
    path:'/xf',
    component:xf,
    meta:{
      title:'消费'
    }
  },
  {
    path:'/zc',
    component:zc,
    meta:{
      title:'入账'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:'active'
})
router.beforeEach((to,from,next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router
