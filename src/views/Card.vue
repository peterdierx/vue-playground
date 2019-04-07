<template>
  <div class='box'>
    <h5 class='title is-5 has-text-danger'>Card</h5>
    <Person name='John Doe' :hobbies="[ 'Swimming', 'Programming', 'Skydiving', 'Cycling' ]" />
  </div>
</template>

<script>
  import Person from '@/components/Person'

  export default {
    name: 'Card',
    components: {
      Person
    }
  }
</script>
