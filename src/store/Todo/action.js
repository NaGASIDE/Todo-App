export const todosActionsTypes = {
  ADD_TODO: 'TODO.ADD_TODO',
  SET_TODO: 'TODO.SET_TODO',
  DELETE_TODO: 'TODO.DELETE_TODO'
}

export const todoActions = {
  addTodo: (todo) => ({type: todosActionsTypes.ADD_TODO, payload: todo }),
  setTodo: (todoId) => ({type: todosActionsTypes.SET_TODO,  payload: todoId }),
  deleteTodo: (todoId) => ({type: todosActionsTypes.DELETE_TODO, payload:todoId })
}