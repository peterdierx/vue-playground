// DIRECTIVES
import Vue from 'vue'

// FOCUS
Vue.directive( 'focus', {
  inserted: ( el ) => {
    el.focus()
  }
})
