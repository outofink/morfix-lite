<template>
  <div>
    <div v-for="card in cards.data" :key="card.id">
      <Card :show="show" :card="card" :lang="cards.metadata.lang"/>
    </div>
    <v-scroll-x-transition>
      <div v-if="skeleton">
        <v-skeleton-loader v-for="i in 3" :key="i" 
                           outlined max-width="450"
                           class="mx-auto my-2"
                           type="article"
        />
      </div>
    </v-scroll-x-transition>
  </div>
</template>

<script>
import Card from './Card'
export default {
  name: "Main",
  components: {
    Card
  },
  props: ["cards", "show", "skeleton"]
}
</script>

<style scoped>

</style>