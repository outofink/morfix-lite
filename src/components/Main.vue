<template>
  <div>
    <div v-for="card in cards.data" :key="card.id">
      <Card :show="show" :card="card" :lang="cards.metadata.lang"/>
    </div> 
  </div>
</template>

<script>
import Card from './Card'
export default {
  name: "Main",
  components: {
    Card
  },
  props: ["cards", "show"]
}
</script>

<style scoped>

</style>