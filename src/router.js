// ROUTER
import Vue    from 'vue'
import Router from 'vue-router'

// VIEWS
import Home         from '@/views/Home'
import About        from '@/views/About'
import Games        from '@/views/Games'
import TodoList     from '@/views/TodoList'
import VueEco       from '@/views/VueEco'
import Props        from '@/views/Props'
import Card         from '@/views/Card'
import Slots        from '@/views/Slots'
import SimpleRouter from '@/views/SimpleRouter'
import ModalShow    from '@/views/ModalShow'

// COMPONENTS
import Counter    from '@/components/Counter'
import GameShow   from '@/components/GameShow'
import VueEcoShow from '@/components/VueEcoShow'
import Watchers   from '@/components/Watchers'
import Joke       from '@/components/Joke'
import Filters    from '@/components/Filters'
import Directive  from '@/components/Directive'

Vue.use( Router )

// ROUTES
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/',           name: 'home',     component: Home },
    { path: '/about',      name: 'about',    component: About },
    { path: '/counter',    name: 'counter',  component: Counter },
    { path: '/games',      name: 'games',    component: Games },
    { path: '/game/:id',   name: 'show',     component: GameShow, props: true },
    { path: '/todos',      name: 'todos',    component: TodoList },
    { path: '/ecovue',     name: 'ecovue',   component: VueEco },
    { path: '/watchers',   name: 'watchers', component: Watchers },
    { path: '/props',      name: 'props',    component: Props },
    { path: '/card',       name: 'card',     component: Card },
    { path: '/jokes',      name: 'jokes',    component: Joke },
    { path: '/slots',      name: 'slots',    component: Slots },
    { path: '/filters',    name: 'filters',  component: Filters },
    { path: '/directives', name: 'direct',   component: Directive },
    { path: '/router',     name: 'router',   component: SimpleRouter },
    { path: '/modal',      name: 'modal',    component: ModalShow },
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
