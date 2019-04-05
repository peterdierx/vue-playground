<template>
  <div class='box'>
    <h4 class='title is-4 has-text-danger'>Info</h4>
    {{ info }}
  </div>
</template>

<script>
  export default {
    name: 'VueEcoShow',
    props: {
      info: String
    }
  }
</script>
