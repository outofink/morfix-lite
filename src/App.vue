<template>
  <div id="app">
    <AddTodo v-on:add-todo="AddTodo"/>
    <Todos v-bind:todos="todos" />
  </div>
</template>

<script>
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    Todos, AddTodo
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          word: "help",
          pos: "verb",
          translation: ["עזרה", "לעזור"]
        },
        {
          id: 2,
          word: "death",
          pos: "noun",
          translation: ["מוות", "למות"]
        },
        {
          id: 3,
          word: "hello!",
          pos: "exclamation",
          translation: ["שלום!", "היי!"]
        }
      ]
    }
  },
  methods: {
    AddTodo(newTodo) {
      console.log(newTodo)
      axios.post('https://cors-anywhere.herokuapp.com/http://services.morfix.com/translationhebrew/TranslationService/GetTranslation/', 
      {
        Query: newTodo,
        ClientName:"Android_Hebrew"
      })
      .then(res => {
        let output = res.data
        let json = [];
        for (let word of output.Words) {
          let translation = [];
          for (let definitions of word.OutputLanguageMeanings) {
            let buffer = [];
            for (let definition of definitions) {
              buffer.push(definition.DisplayText);
            }
            translation.push(buffer.join(', '));
          }
          console.log(word.ID)
          json.push({
            "id": word.ID,
            'word': word.InputLanguageMeanings[0][0].DisplayText,
            'pos': word.PartOfSpeech,
            'translation': translation,
          })
        }
        this.todos = json
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