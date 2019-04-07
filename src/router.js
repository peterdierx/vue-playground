// ROUTER
import Vue    from 'vue'
import Router from 'vue-router'

// VIEWS
import Home     from '@/views/Home'
import About    from '@/views/About'
import Games    from '@/views/Games'
import TodoList from '@/views/TodoList'
import VueEco   from '@/views/VueEco'

// COMPONENTS
import Counter    from '@/components/Counter'
import GameShow   from '@/components/GameShow'
import VueEcoShow from '@/components/VueEcoShow'
import Watchers   from '@/components/Watchers'


Vue.use( Router )

// ROUTES
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/',         name: 'home',     component: Home },
    { path: '/about',    name: 'about',    component: About },
    { path: '/counter',  name: 'counter',  component: Counter },
    { path: '/games',    name: 'games',    component: Games },
    { path: '/game/:id', name: 'show',     component: GameShow, props: true },
    { path: '/todos',    name: 'todos',    component: TodoList },
    { path: '/ecovue',   name: 'ecovue',   component: VueEco },
    { path: '/watchers', name: 'watchers', component: Watchers },
    {
      name: 'namedview',
      path: '/namedview/:id',
      components: {
        default:   VueEco,
        namedview: VueEcoShow
      },
      props: { namedview: true }
    }
  ]
})
