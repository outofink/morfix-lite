<template>
  <div>
    <div v-for="todo in todos.data" :key="todo.id">
      <TodoItem :todo="todo" :lang="todos.metadata.lang"/>
    </div>
            
  </div>
</template>

<script>
import TodoItem from './TodoItem'
export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: ["todos"]
}
</script>

<style scoped>

</style>