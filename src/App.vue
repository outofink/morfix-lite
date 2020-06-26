<template>
  <v-app id="morfix-lite">
    <TopBar @search="Search"/>
    <v-main style="background-color: hsl(218, 100%, 95%)">
      <v-container fluid>
        <Main :show="show" :skeleton="skeleton" :cards="cards" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Main from './components/Main'
import TopBar from './components/TopBar'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Main, TopBar
  },
  data() {
    return {
      show: false,
      skeleton: false,
      cards: { }
    }
  },
  mounted() {
    document.getElementById("morfix-lite").addEventListener('click', function(e) {
      for (let i of ["v-main__wrap", "container"]) {
        if (e.target.classList.contains(i)) document.getElementById("search").focus()
      }
      return
    });
  },
  methods: {
    Search(query) {
      this.show = false
      setTimeout(() => this.skeleton = true, 250)
      axios.post('https://cors-anywhere.herokuapp.com/http://services.morfix.com/translationhebrew/TranslationService/GetTranslation/', 
                 {
                   Query: query,
                   ClientName:"Android_Hebrew"
                 })
        .then(res => {
          let data = res.data
          let lang = data.TranslationTypeValue - 1 ? "Hebrew" : "English";
          let results = [];
          for (let word of data.Words) {
            let translation = [];
            for (let definitions of word.OutputLanguageMeanings) {
              let buffer = [];
              for (let definition of definitions) {
                buffer.push(definition.DisplayText);
              }
              translation.push(buffer.join(', '));
            }
            results.push({
              "id": word.ID,
              'word': word.InputLanguageMeanings[0][0].DisplayText,
              'pos': word.PartOfSpeech,
              'translation': translation,
            })
          }
          this.cards = {metadata: {lang}, data: results}
        })
        .catch(err => console.log(err))
        .finally(() => {
          this.skeleton = false
          setTimeout(() => this.show = true, 250)
        })
    } 
  }
}
</script>

<style>

</style>