<template>
  <div class='box'>
    <h5 class='title is-5 has-text-danger'>Slots</h5>
    <Message title='Title With Props'>Content with slots</Message>
  </div>
</template>

<script>
  import Message from '@/components/Message'

  export default {
    name: 'Slots',
    components: { Message }
  }
</script>
