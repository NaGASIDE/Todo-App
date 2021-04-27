export const todosActionsTypes = {
  ADD_TODO: 'TODO.ADD_TODO',
  SET_TODO: 'TODO.SET_TODO',
  DELETE_TODO: 'TODO.DELETE_TODO'
}

export const todoActions = {
  addTodo: (payload) => ({type: todosActionsTypes.ADD_TODO, payload }),
  setTodo: (todoId) => ({type: todosActionsTypes.SET_TODO,  payload: todoId }),
  deleteTodo: (todo) => ({type: todosActionsTypes.DELETE_TODO, payload:todo })
}