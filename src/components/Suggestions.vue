<template>
  <v-scroll-x-transition>
    <v-card v-if="show" outlined max-width="450" class="mx-auto my-2">
      <v-card-title class="font-italic text-h5 text--secondary">Did you mean: </v-card-title>
      <v-card-text class="text" :class="{ rtl: fromEnglish }">
        <span v-for="(suggestion, index) in suggestions" :key="suggestion">
          <router-link class="word" tag="span" :to="'/' + suggestion.Word">{{ suggestion.Word }}</router-link>
          <span v-if="index + 1 < suggestions.length">, </span>
        </span>
      </v-card-text>
    </v-card>
  </v-scroll-x-transition>
</template>

<script>
export default {
  name: 'Suggestions',
  props: ['suggestions', 'fromEnglish', 'show'],
}
</script>

<style scoped>
.text {
  font-size: 1.25rem;
  line-height: 1.5rem;
}
.word {
  color: #448aff;
  cursor: pointer;
}
</style>
