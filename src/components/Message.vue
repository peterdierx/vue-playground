<template>
  <article class='message'>
    <div class='message-header'>
      <p>{{ title }}</p>
    </div>
    <div class='message-body'>
      <slot></slot>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'Message',
    props: {
      title: String
    }
  }
</script>
