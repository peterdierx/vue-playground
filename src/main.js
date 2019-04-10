// VUE
import Vue    from 'vue'
import App    from '@/App'
import router from '@/router'
import store  from '@/store'

// CONFIG
Vue.config.productionTip = false

// BULMA
import 'bulma/css/bulma.css'

// UTILS
import filters    from '@/filters'
import directives from '@/directives'

// APP
new Vue({
  router,
  store,
  render: h => h( App )
}).$mount( '#app' )
