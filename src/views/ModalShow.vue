<template>
  <div class='box'>
    <h5 class='title is-5'>Modal</h5>
    <div class=field>
      <div class='control'>
        <input type='text' class='input is-small is-width' value="<button @click='closeModal'></button>" readonly>
      </div>
    </div>
    <div class='field'>
      <div class='control'>
        <input type='text' class='input is-small is-width' value="<button @click='$emit( 'close' )'></button>" readonly>
      </div>
    </div>
    <button @click='show = true' class='button is-info'>Show Modal</button>
    <modal v-show='show' @close='show = false'></modal>
  </div>
</template>

<script>
  import Modal from '@/components/Modal'

  export default {
    name: 'ModalShow',
    components: { Modal },
    data() {
      return {
        show: false
      }
    }
  }
</script>

<style scoped>
  .is-width {
    width: 260px;
  }
</style>
