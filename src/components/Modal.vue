<template>
  <div class='modal is-active'>
    <div class='modal-background'></div>
    <div class='modal-content'>
      <div class='box'>
        <article class='media'>
          <div class='media-content'>
            <div class='content'>
              <p>
                <strong>Vue</strong>
                <br>
                Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, 
                Vue is designed from the ground up to be incrementally adoptable. The core library is focused on
                the view layer only, and is easy to pick up and integrate with other libraries or existing projects.
                On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications
                when used in combination with modern tooling and supporting libraries.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
    <button @click='closeModal' class='modal-close is-large' aria-label='close'></button>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      closeModal() {
        this.$emit( 'close' )
      }
    },
  }
</script>