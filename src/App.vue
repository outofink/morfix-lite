<template>
  <v-app id="morfix-lite">
    <TopBar @search="Search" />
    <v-main class="bg">
      <v-container fluid>
        <Main :show="show" :skeleton="skeleton" :cards="cards" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Main from './components/Main'
import TopBar from './components/TopBar'

export default {
  name: 'App',
  components: {
    Main,
    TopBar,
  },
  data() {
    return {
      show: false,
      skeleton: false,
      cards: {},
    }
  },
  watch: {
    $route: 'Check',
  },
  mounted() {
    document.getElementById('morfix-lite').addEventListener('click', function (e) {
      for (let i of ['v-main__wrap', 'container']) {
        if (e.target.classList.contains(i)) document.getElementById('search').focus()
      }
      return
    })
  },
  created() {
    this.Check()
  },
  methods: {
    Check() {
      if (this.$route.params.word) {
        this.Search(this.$route.params.word)
      }
    },
    Search(query) {
      this.show = false
      setTimeout(() => (this.skeleton = true), 300)

      const sanitizedQuery = query.replace(/[`~!@#$%^&*()_|+=?;:'",.<>{}[\]\\/]/gi, '')

      const path = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/search' : '/search'

      fetch(path, {
        method: 'POST',
        timeout: 4000,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ word: sanitizedQuery }),
      })
        .then((response) => response.json())
        .then((data) => {
          let fromEnglish = data.TranslationTypeValue - 1
          let results = []
          for (let word of data.Words) {
            let translation = []
            for (let definitions of word.OutputLanguageMeanings) {
              let buffer = []
              for (let definition of definitions) {
                buffer.push(definition.DisplayText)
              }
              translation.push(buffer.join(', '))
            }
            results.push({
              id: word.ID,
              word: word.InputLanguageMeanings[0][0].DisplayText,
              pos: word.PartOfSpeech,
              translation: translation,
            })
          }
          this.cards = { metadata: { fromEnglish }, data: results, suggestions: data.CorrectionList }
          this.skeleton = false
        })
        .catch((err) => {
          console.error(err)
          this.cards = { metadata: { fromEnglish: 0 }, data: [], suggestions: [] }
        })
        .finally(() => {
          document.title = 'Morfix Lite - ' + this.$route.params.word
          setTimeout(() => {
            this.skeleton = false
            this.show = true
          }, 300)
        })
    },
  },
}
</script>

<style>
.rtl {
  direction: rtl;
}
.bg {
  background-color: hsl(218, 100%, 95%);
}
</style>
