<template>
  <div>
    <div v-for="card in cards.data" :key="card.id">
      <Card :show="show" :card="card" :fromEnglish="cards.metadata.fromEnglish" />
    </div>
    <v-scroll-x-transition>
      <Suggestions
        v-if="show && cards.data && cards.data.length === 0 && cards.suggestions && cards.suggestions.length !== 0"
        :show="show"
        :suggestions="cards.suggestions"
        :fromEnglish="cards.metadata.fromEnglish"
      />
    </v-scroll-x-transition>
    <v-scroll-x-transition>
      <v-card v-if="show && cards.data && cards.data.length === 0" outlined max-width="450" class="mx-auto my-2">
        <v-card-title class="justify-center font-italic text-h5 text--secondary">no results found</v-card-title>
      </v-card>
    </v-scroll-x-transition>
    <v-scroll-x-transition>
      <div v-if="skeleton">
        <v-skeleton-loader v-for="i in 3" :key="i" outlined max-width="450" class="mx-auto my-2" type="article" />
      </div>
    </v-scroll-x-transition>
  </div>
</template>

<script>
import Card from './Card'
import Suggestions from './Suggestions'

export default {
  name: 'Main',
  components: {
    Card,
    Suggestions,
  },
  props: ['cards', 'show', 'skeleton'],
}
</script>

<style scoped></style>
