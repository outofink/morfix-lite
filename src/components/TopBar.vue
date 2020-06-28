<template>
  <v-app-bar color="blue accent-2" app dark flat>
    <v-btn icon class="d-flex d-sm-none mx-auto"><v-icon x-large>$morfix</v-icon></v-btn>
    <v-toolbar-title class="d-none d-sm-flex">Morfix Lite</v-toolbar-title>
    <v-spacer />
    <v-form style="margin-left: 15px;" :style="$vuetify.breakpoint.xs ? { width: '100%' } : {}" @submit="DoSearch">
      <v-text-field
        id="search"
        v-model="search"
        autocomplete="off"
        prepend-inner-icon="search"
        placeholder="Search..."
        single-line
        color="blue"
        hide-details
        solo-inverted
        flat
        clearable
        rounded
        clear-icon="clear"
      />
    </v-form>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
      search: '',
    }
  },
  methods: {
    DoSearch(e) {
      e.preventDefault()
      this.$emit('search', this.search)
      this.search = ''
      document.getElementById('search').blur()
    },
  },
}
</script>

<style scoped></style>
