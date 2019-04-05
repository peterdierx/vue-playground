<template>
  <div class='todo-width'>
    <p :class="{ 'is-complete': todo.completed }" class='is-height'>
      <input type='checkbox' @change='markComplete'>
      {{ todo.title }}
      <button @click="$emit( 'del-todo', todo.id )" class='button is-danger is-small is-float'>DEL</button>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      todo: Object
    },
    methods: {
      markComplete() {
        this.todo.completed = !this.todo.completed
      }
    },
  }
</script>

<style scoped>
  .is-complete {
    text-decoration: line-through;
  }
  .todo-width {
    width: 220px;
  }
  .is-float {
    float: right;
  }
  .is-height {
    height: 40px;
  }
</style>
