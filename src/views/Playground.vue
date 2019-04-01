<template>
  <div class='tabs is-small is-boxed'>
    <ul>
      <router-link to='/'>Home</router-link>
      <router-link to='/about'   active-class='is-active' tag='li'><a>About</a></router-link>
      <router-link to='/counter' active-class='is-active' tag='li'><a>Counter</a></router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Playground'
  }
</script>
