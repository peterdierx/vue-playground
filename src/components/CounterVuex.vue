<template>
  <div>
    <h5 class='title is-5'>Vuex Store Counter: {{ $store.state.counter }}</h5>
    <div class='buttons'>
      <span @click='increment' class='button is-primary'>Increment</span>
      <span @click='decrement' class='button is-link'>Decrement</span>
      <span @click='reset' class='button is-success'>Reset</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CounterVuex',
    methods: {
      increment() {
        this.$store.commit( 'INCREMENT_COUNTER' )
      },
      decrement() {
        this.$store.commit( 'DECREMENT_COUNTER' )
      },
      reset() {
        this.$store.commit( 'RESET_COUNTER' )
      }
    }
  }
</script>
