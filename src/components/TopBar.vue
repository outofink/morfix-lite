<template>
  <v-app-bar color="blue accent-2" app dark flat>
    <v-btn disabled aria-label="icon" icon class="d-flex d-sm-none mx-auto"><v-icon x-large>$morfix</v-icon></v-btn>
    <v-toolbar-title class="d-none d-sm-flex">Morfix Lite</v-toolbar-title>
    <v-spacer />
    <v-form style="margin-left: 15px" :style="$vuetify.breakpoint.xs ? { width: '100%' } : {}" @submit="DoSearch">
      <v-text-field
        id="search"
        v-model="search"
        autocomplete="off"
        aria-label="search"
        prepend-inner-icon="$search"
        placeholder="Search..."
        single-line
        color="blue"
        hide-details
        solo-inverted
        flat
        clearable
        rounded
        clear-icon="$close"
        :class="{ rtl: !english }"
        @input="CheckLang"
      />
    </v-form>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
      english: true,
      search: '',
    }
  },
  methods: {
    DoSearch(e) {
      e.preventDefault()
      //this.$emit('search', this.search)
      this.$router.push({ path: this.search })
      this.search = ''
      this.english = true
      document.getElementById('search').blur()
    },
    CheckLang() {
      this.english = this.search.charCodeAt(0) < 128
      if (!this.search) this.english = true
    },
  },
}
</script>

<style scoped></style>
