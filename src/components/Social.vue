<template>
  <div class='card' style='width:470px'>
    <div class='card-content'>
      <div class='media'>
        <div class='media-left'>
          <figure class='image is-48x48'>
            <img src='@/assets/avatar.jpeg' alt='Placeholder image'>
          </figure>
        </div>
        <div class='media-content'>
          <p class='title is-4 has-text-link'>{{ name }}</p>
          <p class='subtitle is-6'>{{ twitter }}</p>
        </div>
      </div>

      <div class='content'>
         <slot></slot>
        <br>
        <b><time datetime='2019-1-1'>11:09 PM - 15 Mrt 2019</time></b>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Social',
    props: {
      name:    String,
      twitter: String
    }
  }
</script>
