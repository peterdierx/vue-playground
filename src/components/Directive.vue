<template>
  <div class='box'>
    <h5 class='title is-5'>Directives</h5>
    <p>v-focus</p>
    <input v-focus type='text' v-model='input'>
    {{ input }}
  </div>
</template>

<script>
  export default {
    name: 'Directive',
    data() {
      return {
        input: null
      }
    }
  }
</script>
