<template>
  <div class='has-text-centered'>
    <img alt='Vue logo' src='@/assets/logo.png'>
    <h4 class='title is-4'>{{ welcome }}</h4>
    <router-link to='/about'>
      <button class='button is-primary'>Start</button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        welcome: 'Vue Playground'
      }
    }
  }
</script>
