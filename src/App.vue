<template>
  <div id="app">
    <Todos />
  </div>
</template>

<script>
import Todos from './components/Todos.vue'

export default {
  name: 'App',
  components: {
    Todos
  }
}
</script>

<style lang="scss">
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html {
  font-size: 62.5%;
}

body {
    background: #2B292E;
  color: #fafafa;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.6rem;
}
button {
  cursor: pointer;
}
</style>
