<template>
    <div>
        <form @submit="addTodo">
            <input type="text" name="search" v-model="search" placeholder="search">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
export default {
    name: "AddTodo",
    data() {
        return {
            search: ''
        }
    },
    methods: {
        addTodo(e) {
            e.preventDefault()
            this.$emit("add-todo", this.search)
            this.search = ''
        }
    }
}
</script>

<style scoped>
  form {
    display: flex;
  }
  input[type="text"] {
    flex: 10;
    padding: 5px;
  }
  input[type="submit"] {
    flex: 2;
  }
</style>