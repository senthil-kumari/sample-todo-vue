
<template>
<div class="main-container">
   <div class="header">
      <div class="container">
          <h1 class="header__title">To-do App</h1>
      </div>
    </div>
    <div class="container">
      <AddTodo />
       <div v-if="getTotalTodoCount===0">No todo for you :) </div>
       <article class="note" v-else><em>Note: Double click todo item to mark as complete/incomplete</em></article>
      <DisplayTodo
        todoSection="pending"
        :getTodosToShow ="getAllPending"
      />
      <DisplayTodo
        todoSection="completed"
        :getTodosToShow ="getAllCompleted"
      />
    </div>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import AddTodo from './AddTodo'
import DisplayTodo from './DisplayTodo'

export default {
  name: 'Todos',
  components: {
    AddTodo,
    DisplayTodo
  },
  computed: {
    ...mapState([
      'todos'
    ]),
    ...mapGetters([
      'getAllCompleted',
      'getAllPending',
      'getTotalTodoCount'
    ])
  }
}
</script>

<style scoped>
.container {
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 1.6rem;
}

.header {
  /* background: #6F439C; */
  background: #353239;
  color:white;
  padding: 1.6rem 0;
}

.header__title {
  font-size: 3.2rem;
  margin-bottom: .4rem;
}
.note{
  font-size: 13px;
}
</style>
