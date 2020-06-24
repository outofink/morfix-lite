<template>
    <div>
        <div v-bind:key="todo.id" v-for="todo in todos.data">
            <TodoItem v-bind:todo="todo" :lang="todos.metadata.lang"/>
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