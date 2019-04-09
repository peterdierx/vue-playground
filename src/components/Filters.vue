<template>
  <div class='box'>
    <h5 class='title is-5 has-text-link'>Filters</h5>
    
    <p><strong>Capital First Character</strong></p>
    <p>{{ content }}</p>
    <p>{{ content | capital }}</p>
    <br>
    <p><strong>Date as day month year</strong></p>
    <p>{{ date }}</p>
    <p>{{ date | ddmmyy }}</p>

  </div>
</template>

<script>
  export default {
    name: 'Filters',
    data() {
      return {
        content: 'vue is awesome',
        date:    '2019-07-12'
      }
    }
  }
</script>
