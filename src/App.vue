<template>
  <section class='section'>
    <div class='container'>
      <Playground v-if="$route.name !== 'home'"/>
      <router-view/>
    </div>
  </section>
</template>

<script>
  import Playground from '@/views/Playground'

  export default {
    name: 'App',
    components: { Playground }
  }
</script>

<style>
  .spaced {
    margin-top: 20px;
  }
  .api {
    margin-left: 10px;
    margin-top: -20px;
  }
</style>
