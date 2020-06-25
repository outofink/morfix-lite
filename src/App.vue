<template>
  <v-app id="morfix-lite">
    <TopBar @add-todo="AddTodo"/>
    <v-main style="background-color: hsl(213, 92%, 95%)">
      <v-container fluid>
        <Todos :todos="todos" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Todos from './components/Todos'
import TopBar from './components/TopBar'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    Todos, TopBar
  },
  data() {
    return {
      todos: { }
    }
  },
  methods: {
    AddTodo(newTodo) {
      axios.post('https://cors-anywhere.herokuapp.com/http://services.morfix.com/translationhebrew/TranslationService/GetTranslation/', 
                 {
                   Query: newTodo,
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
          this.todos = {metadata: {lang}, data: results}
        })
        .catch(err => console.log(err))
    } 
  }
}
</script>

<style>

</style>