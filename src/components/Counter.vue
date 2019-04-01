<template>
  <div class='box'>
    <h5 class='title is-5'>Counter: {{ counter }}</h5>
    <div class='buttons'>
      <span @click='increment' class='button is-primary'>Increment</span>
      <span @click='decrement' class='button is-link'>Decrement</span>
      <span @click='reset'     class='button is-success'>Reset</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Counter',
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      increment() {
        this.counter++
      },
      decrement() {
        this.counter--
      },
      reset() {
        this.counter = 0
      }
    }
  }
</script>
