<template>
  <div>
    <div v-for='todo in todos' :key='todo.id'>
      <TodoItem :todo='todo' @del-todo="$emit( 'del-todo', todo.id )"></TodoItem>
    </div>
  </div>
</template>

<script>
  import TodoItem from '@/components/TodoItem'
  
  export default {
    name: 'Todos',
    components: { TodoItem },
    props: {
      todos: Array
    }
  }
</script>
