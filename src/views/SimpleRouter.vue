<template>
  <div class='box'>
    <h5 class='title is-5 has-text-danger'>Simple Router</h5>
    <a @click="route='relations'" class='button is-info'>Relations</a>&nbsp;
    <a @click="route='contacts'"  class='button is-success'>Contacts</a>
    <component :is='route'></component>
  </div>
</template>

<script>
  import Relations from '@/components/Relations'
  import Contacts  from '@/components/Contacts'

  export default {
    name: 'SimpleRouter',
    components: { Relations, Contacts },
    data() {
      return {
        route: ''
      }
    }
  }
</script>
