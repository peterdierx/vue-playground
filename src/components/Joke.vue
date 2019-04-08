<template>
  <div class='box'>
    <h5 class='title is-5'>Jokes with axios</h5>
    <button @click='getJoke' class='button is-info'>Joke</button>
    <div class='joke' v-if='joke' style='margin-top:20px'>
      <p>{{ joke }}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Joke',
    data() {
      return {
        joke: ''
      }
    },
    methods: {
      async getJoke() {
        let   config   = { headers: { 'Accept': 'application/json' } }
        const response = await axios.get( 'https://icanhazdadjoke.com', config )
        this.joke      = response.data.joke
      }
    }
  }
</script>
