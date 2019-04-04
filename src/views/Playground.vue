<template>
  <div class='tabs is-small is-boxed'>
    <ul>
      <router-link to='/'        ref='home'>Home</router-link>
      <router-link to='/about'   ref='about'   active-class='is-active' tag='li'><a>About</a></router-link>
      <router-link to='/counter' ref='counter' active-class='is-active' tag='li'><a>Counter</a></router-link>
      <router-link to='/games'   ref='games'   active-class='is-active' tag='li'><a>Games</a></router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Playground'
  }
</script>
