// ROUTER
import Vue    from 'vue'
import Router from 'vue-router'

// VIEWS
import Home  from '@/views/Home'
import About from '@/views/About'
import Games from '@/views/Games'

// COMPONENTS
import Counter  from '@/components/Counter'
import GameShow from '@/components/GameShow'

Vue.use( Router )

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/',         name: 'home',    component: Home },
    { path: '/about',    name: 'about',   component: About },
    { path: '/counter',  name: 'counter', component: Counter },
    { path: '/games',    name: 'games',   component: Games },
    { path: '/game/:id', name: 'show',    component: GameShow, props: true }
  ]
})
