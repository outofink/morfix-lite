<template>
  <v-scroll-x-transition>
    <v-card v-if="show" outlined max-width="450" class="mx-auto my-2">
      <v-card-title class="title" :class="{ rtl: fromEnglish }">{{ card.word }}</v-card-title>
      <v-card-subtitle :class="{ rtl: fromEnglish }">{{ card.pos }}</v-card-subtitle>
      <v-card-text class="text" :class="{ rtl: !fromEnglish }">
        <div v-for="trans in card.translation" :key="trans">{{ trans }}</div>
      </v-card-text>
    </v-card>
  </v-scroll-x-transition>
</template>

<script>
export default {
  name: 'Card',
  props: ['card', 'fromEnglish', 'show'],
}
</script>

<style scoped>
.title {
  font-size: 1.5rem;
}
.text {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.rtl {
  direction: rtl;
}
.ltr {
  direction: ltr;
}
</style>
