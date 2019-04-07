<template>
  <div>
    <div><b>Person:</b> {{ name }}</div>
    <p class='spaced'><b>Hobbies:</b></p>
    <ul>
      <li v-for='hobby in hobbies' :key='hobby'>
        {{ hobby }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Person',
    props: {
      name:    String,
      hobbies: Array
    }
  }
</script>
