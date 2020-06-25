<template>
  <div>
    <v-app-bar color="blue accent-4" dark flat>  
      <v-toolbar-title>Morfix Lite</v-toolbar-title>
      <v-spacer/>
      <form @submit="addTodo">
        <v-row>
          <v-text-field 
            v-model="search"
            prepend-inner-icon="search"
            placeholder="Search..."
            single-line
            color="blue"
            hide-details
            solo-inverted
            flat
            clearable
            clear-icon="clear"
          />
        </v-row>
      </form>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "TopBar",
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