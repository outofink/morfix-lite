<template>
  <v-card outlined max-width="450" class="mx-auto my-2">
    <v-card-title :class="{'ltr': lang === 'English', 'rtl': lang === 'Hebrew'}">{{todo.word}}</v-card-title>
    <v-card-subtitle :class="{'ltr': lang === 'English', 'rtl': lang === 'Hebrew'}">{{todo.pos}}</v-card-subtitle>
    <v-card-text :class="{'rtl': lang === 'English', 'ltr': lang === 'Hebrew'}">
      <div v-for="trans in todo.translation" :key="trans">{{trans}}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo", "lang"]
}
</script>

<style scoped>
  .rtl {
    direction: rtl;
  }
  .ltr {
    direction: ltr;
  }
</style>