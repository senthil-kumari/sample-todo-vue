export default {
  addNewTodo: (context, todo) => {
    context.commit('addNewTodo', todo)
  },
  removeTodo: (context, todoId) => {
    context.commit('removeTodo', todoId)
  },
  changeEditStatus: (context, todoId) => {
    context.commit('changeEditStatus', todoId)
  },
  deleteAllTodos: (context) => {
    context.commit('deleteAllTodos')
  },
  toggleTodo: (context, todoId) => {
    context.commit('toggleTodo', todoId)
  },
  updateSortStatusTodo: (context, payload) => {
    context.commit('updateSortStatusTodo', payload)
  }
}
