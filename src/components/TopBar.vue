<template>
  <v-app-bar color="blue accent-2" app dark flat>
    <v-icon large class="d-flex d-sm-none">$morfix</v-icon>
    <v-toolbar-title class="d-none d-sm-flex">Morfix Lite</v-toolbar-title>
    <v-spacer/>
    <v-form @submit="addTodo">
      <v-row style="margin-left: 15px">
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
    </v-form>
  </v-app-bar>
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

</style>