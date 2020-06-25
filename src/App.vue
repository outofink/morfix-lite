<template>
  <div id="app">
    <div id="app">
      <v-app id="inspire">
        <div>
          <TopBar @add-todo="AddTodo"/>
          <Todos :todos="todos" />
        </div>
      </v-app>
    </div>
  </div>
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
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: #666;
  }
</style>