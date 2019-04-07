<template>
  <div class='box'>
    <h5 class='title is-5 has-text-danger'>Props and Slots</h5>
      <div class=field>
        <div class='control'>
          <input type='text' class='input is-small' style='width:471px'
          value="<Social name='John Doe' twitter='@johndoe'>Lorem ipsum dolor sit amet</Social>"
          readonly>
        </div>
      </div>
    <Social name='John Doe' twitter='@johndoe'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris.
    </Social>
  </div>
</template>

<script>
  import Social from '@/components/Social'

  export default {
    name: 'Props',
    components: { Social }
  }
</script>
