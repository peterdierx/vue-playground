<template>
  <div class='tabs is-small is-boxed'>
    <ul>
      <router-link to='/'           ref='home'>Home</router-link>
      <router-link to='/about'      ref='about'      active-class='is-active' tag='li'><a>About</a></router-link>
      <router-link to='/counter'    ref='counter'    active-class='is-active' tag='li'><a>Counter</a></router-link>
      <router-link to='/games'      ref='games'      active-class='is-active' tag='li'><a>Games</a></router-link>
      <router-link to='/todos'      ref='todos'      active-class='is-active' tag='li'><a>Todos</a></router-link>
      <router-link to='/ecovue'     ref='ecovue'     active-class='is-active' tag='li'><a>Named View</a></router-link>
      <router-link to='/watchers'   ref='watchers'   active-class='is-active' tag='li'><a>Watchers</a></router-link>
      <router-link to='/props'      ref='props'      active-class='is-active' tag='li'><a>Props</a></router-link>
      <router-link to='/card'       ref='card'       active-class='is-active' tag='li'><a>Card</a></router-link>
      <router-link to='/jokes'      ref='jokes'      active-class='is-active' tag='li'><a>Jokes</a></router-link>
      <router-link to='/slots'      ref='slots'      active-class='is-active' tag='li'><a>Slots</a></router-link>
      <router-link to='/filters'    ref='filters'    active-class='is-active' tag='li'><a>Filters</a></router-link>
      <router-link to='/directives' ref='directives' active-class='is-active' tag='li'><a>Directives</a></router-link>
      <router-link to='/router'     ref='router'     active-class='is-active' tag='li'><a>Router</a></router-link>
      <router-link to='/modal'      ref='modal'      active-class='is-active' tag='li'><a>Modal</a></router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Playground'
  }
</script>
