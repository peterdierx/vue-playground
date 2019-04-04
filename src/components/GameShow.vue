<template>
  <div class='box'>
    <h5 class='title is-5'>{{ name }}</h5>
    <h4 class='subtitle'>{{ info }}</h4>
    <div>
      <button @click='back' class='button is-success'>Back</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameShow',
    props: {
      name: String,
      info: String
    },
    methods: {
      back() {
        this.$router.push( '/games' )
      }
    }
  }
</script>
