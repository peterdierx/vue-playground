<template>
  <div class='box'>
    <h5 class='title is-5'>Watchers</h5>
    <p><b>Name:</b> {{ name }}</p>
    <p><b>Status:</b> {{ status }} </p>
    <button @click='changeName' class='button is-link spaced'>Change Name</button>
  </div>
</template>

<script>
  export default {
    name: 'Watchers',
    data() {
      return {
        name: 'John',
        status: ''
      }
    },
    methods: {
      changeName() {
        this.name = 'John Doe'
      }
    },
    watch: {
      name( newValue, oldValue ) {
        this.status = `${ oldValue } = ${ newValue }`
      }
    }
  }
</script>
