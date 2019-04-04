<template>
  <li>
    <router-link :to="{ name: 'show', params: { id, name, info } }">
      {{ name }}
    </router-link>
  </li>
</template>

<script>
  export default {
    name: 'Game',
    props: {
      id:   Number,
      name: String,
      info: String
    }
  }
</script>
