<template>
  <div class="todo-item">
    <h1 :class="{'ltr': lang === 'English', 'rtl': lang === 'Hebrew'}">{{todo.word}}</h1>
    <h6 :class="{'ltr': lang === 'English', 'rtl': lang === 'Hebrew'}">{{todo.pos}}</h6>
    <div v-for="trans in todo.translation" :key="trans">
      <h2 :class="{'rtl': lang === 'English', 'ltr': lang === 'Hebrew'}">{{trans}}</h2>
    </div>

  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo", "lang"]
}
</script>

<style scoped>
  .todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }
  .is-complete {
    text-decoration: line-through;
  }
  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
  .rtl {
    direction: rtl;
  }
  .ltr {
    direction: ltr;
  }
</style>