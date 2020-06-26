<template>
  <v-scroll-x-transition>
    <v-card v-if="show" outlined max-width="450" class="mx-auto my-2">
      <v-card-title style="font-size: 1.5rem" :class="{'ltr': lang === 'English', 'rtl': lang === 'Hebrew'}">{{card.word}}</v-card-title>
      <v-card-subtitle :class="{'ltr': lang === 'English', 'rtl': lang === 'Hebrew'}">{{card.pos}}</v-card-subtitle>
      <v-card-text style="font-size: 1.25rem; line-height: 1.75rem" :class="{'rtl': lang === 'English', 'ltr': lang === 'Hebrew'}">
        <div v-for="trans in card.translation" :key="trans">{{trans}}</div>
      </v-card-text>
    </v-card>
  </v-scroll-x-transition>
</template>

<script>
export default {
  name: "Card",
  props: ["card", "lang", "show", "skeleton"]
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