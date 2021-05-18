export const importantTodosTypes  = {
  ADD_IMPORTANT_TODO: `IMPORTANT.ADD_TODO`,
  SET_IMPORTANT_TODO: `IMPORTANT.SET_IMPORTANT_TODO`,
  DELETE_IMPORTANT_TODO: `IMPORTANT.DELETE_TODO`
}

export const importantTodoActions = {
  addImportantTodo: (todo) => ({type: importantTodosTypes.ADD_IMPORTANT_TODO, payload: todo}),
  setImportantTodo: (todoId) => ({type: importantTodosTypes.SET_IMPORTANT_TODO, payload: todoId}),
  deleteImportantTodo: (todoId) => ({type: importantTodosTypes.DELETE_IMPORTANT_TODO, payload: todoId})
}