export default {
  addNewTodo: (state, todo) => {
    state.todos.unshift(todo)
    state.pending.sorted = false
    state.pending.type = ''
  },
  removeTodo: (state, todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId)
  },
  changeEditStatus: (state, todoId) => {
    const currentTodos = [...state.todos]
    const todo = currentTodos.find((todo) => todo.id === todoId)

    if (todo) {
      todo.edit = !todo.edit
    }
    state.todos = currentTodos
  },
  deleteAllTodos: (state) => {
    state.todos = []
  },
  updateSortStatusTodo: (state, { sortOrder, todoSection }) => {
    state[todoSection].sorted = true
    state[todoSection].type = sortOrder
  },
  toggleTodo: (state, todoId) => {
    const currentTodos = [...state.todos]
    const todo = currentTodos.find((todo) => todo.id === todoId)

    if (todo) {
      todo.completed = !todo.completed
    }
    state.todos = currentTodos
  }

}
