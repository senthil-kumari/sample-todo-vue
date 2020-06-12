<template>
  <div>
    <div class="sub-title" v-if="getTodosToShow.length>0">
      <div>
        <label class='section-heading'
          :class="[todoSection==='pending'? 'incomplete': 'complete']">
          {{todoSection}} Todos({{getTodosToShow.length}})
        </label>
        <i @click="updateSortStatus('asc')" class="fas fa-sort-alpha-down icon"></i>
        <i @click="updateSortStatus('desc')" class="fas fa-sort-alpha-up-alt icon"></i>
      </div>
      <div>
        <button @click="deleteAll" class="action__button" v-if="todoSection==='pending'">Delete All</button>
      </div>
    </div>
    <div class='list__todos'>
      <div class="list-item" v-for="todo in getTodosToShow" :key="todo.id">
        <div @dblclick="toggleTodoStatus(todo.id)"
        class="todo-name"
        :class="[todo.completed ? 'done' : 'incomplete']"
        v-if="!todo.edit"
        >
        {{todo.name}}
        </div>
        <div v-else>
            <input class="edit-field" type='text' v-model="todo.name">
            <i @click="editTodo(todo.id)" class="fas fa-check-circle icon confirm"></i>
        </div>
        <div>
          <i @click="editTodo(todo.id)" class="fas fa-edit icon"></i>
          <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt icon del" ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    getTodosToShow: Array,
    todoSection: String
  },
  methods: {
    ...mapActions(['removeTodo', 'deleteAllTodos', 'changeEditStatus', 'toggleTodo', 'updateSortStatusTodo']),
    deleteTodo (todoId) {
      this.removeTodo(todoId)
    },
    deleteAll () {
      this.deleteAllTodos()
    },
    editTodo (todoId) {
      this.changeEditStatus(todoId)
    },
    updateSortStatus (sortOrder) {
      const payload = {
        sortOrder,
        todoSection: this.todoSection
      }
      this.updateSortStatusTodo(payload)
    },
    toggleTodoStatus (todoId) {
      this.toggleTodo(todoId)
    }
  }

}
</script>
<style scoped>
.sub-title{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list-item {
    text-decoration: none;
    color: #fafafa;
    cursor: pointer;
    background: #353239;
    border: 1px solid #423e47;
    margin: 1.6rem 0;
    padding: 1rem 1.6rem;
    display: block;
    transition: background .3s ease;
    display: flex;
    justify-content: space-between;
    align-items: center
}
.icon{
  padding: 5px;
}
.del{
  color: #ff6161;
}
.action__button {
    color: #7044a0;
    border: none;
    border-bottom: 2px solid #603a88;
    background-color: white;
    font-size: 1.4rem;
    font-weight: 600;
    padding: .8rem;
    margin: 0.5rem;
    transition: background .3s ease, color .3s ease;

}
.section-heading{
  text-transform: capitalize;
  font-weight: 600;
}
.todo-name{
  width: 89%;
}
.done{
  color: yellowgreen;
  text-decoration: line-through;
}

.incomplete{
  color: rgb(74, 208, 253);
}
.complete{
  color: yellowgreen;
}
.confirm{
  color: green;
  font-size: 2rem;
}
.edit-field{
  background: lightgray;
    padding: 5px;
    border: none;
    border: 1px solid #ffffff;
}
</style>
