export const compliteActionsTypes = {
  COMPLITE_TODO: `COMPLITE.TODO`,
  DELETE_COMPLETE_TODO: 'DELETE_COMPLETE_TODO'
}

export const ComploteActions = {
  conpliteTodo: (todo) => ({type: compliteActionsTypes.COMPLITE_TODO, payload: todo}),
  deletecompleteTodo: (todoId) => ({type: compliteActionsTypes.DELETE_COMPLETE_TODO, payload: todoId })
}