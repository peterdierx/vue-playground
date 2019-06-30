<template>
  <div class='box'>
    <h5 class='title is-5'>Todos</h5>
    <Todos :todos='todos' @del-todo='deleteTodo' />
  </div>
</template>

<script>
  import Todos from '@/components/Todos'

  export default {
    name: 'TodoList',
    components: { Todos },
    data() {
      return {
        todos: [
          { id: 1, title: 'Get Groceries',   completed: false },
          { id: 2, title: 'Walk the Dog',    completed: false },
          { id: 3, title: 'Go Cycling',      completed: false },
          { id: 4, title: 'Wash the Dishes', completed: false },
          { id: 5, title: 'Maw the lawn',    completed: false }
        ]
      }
    },
    methods: {
      deleteTodo( id ) {
        this.todos = this.todos.filter( todo => todo.id !== id )
      }
    }
  }
</script>
