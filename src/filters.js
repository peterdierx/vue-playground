// FILTERS
import Vue from 'vue'

// CAPITAL FIRST CHAR
Vue.filter( 'capital', ( text ) => {
  return text.toString().charAt( 0 ).toUpperCase() + text.slice( 1 )
})

// DDMMYY
Vue.filter( 'ddmmyy', ( date ) => {
  if ( date ) {
    let day   = date.substr( -2 )
    let month = date.substr( 5, 2 )
    let year  = date.substr( 0, 4 )
    return `${ day }-${ month }-${ year }`
  }
})
