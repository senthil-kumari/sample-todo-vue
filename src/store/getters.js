export default {

  getTotalTodoCount: (state) => {
    return state.todos.length
  },
  getAllCompleted: (state) => {
    const completedTodos = state.todos.filter(todo => todo.completed)
    const sortStatus = state.completed.sorted
    const sortOrder = state.completed.type
    const completedSortedTodos = [...completedTodos]
    function compare (a, b) {
      const nameA = a.name.toUpperCase() // ignore upper and lowercase
      const nameB = b.name.toUpperCase() // ignore upper and lowercase
      let comparison = 0
      if (nameA < nameB) {
        comparison = -1
      }
      if (nameA > nameB) {
        comparison = 1
      }

      // names must be equal
      return (
        (sortOrder === 'desc') ? (comparison * -1) : comparison
      )
    }
    completedSortedTodos.sort(compare)

    const todos = sortStatus ? completedSortedTodos : completedTodos
    return todos
  },
  getAllPending: (state) => {
    const pendingTodos = state.todos.filter(todo => !todo.completed)
    const sortStatus = state.pending.sorted
    const sortOrder = state.pending.type
    const pendingSortedTodos = [...pendingTodos]
    function compare (a, b) {
      const nameA = a.name.toUpperCase() // ignore upper and lowercase
      const nameB = b.name.toUpperCase() // ignore upper and lowercase
      let comparison = 0
      if (nameA < nameB) {
        comparison = -1
      }
      if (nameA > nameB) {
        comparison = 1
      }

      // names must be equal
      return (
        (sortOrder === 'desc') ? (comparison * -1) : comparison
      )
    }
    pendingSortedTodos.sort(compare)

    const todos = sortStatus ? pendingSortedTodos : pendingTodos
    return todos
  }

}
