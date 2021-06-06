import { todosActionsTypes } from './action';
import { todos } from './state'

export const todoReducer = (state = todos, action) => {
  let newTodos;
  switch (action.type) {
    case todosActionsTypes.ADD_TODO:
      newTodos = [...state];
      newTodos.push(action.payload)
      return newTodos
    case todosActionsTypes.DELETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter(todo => todo.id != action.payload)
      return newTodos;
    case todosActionsTypes.SET_TODO:
      newTodos = [...state];
      let index = -1
      for (let i = 0; i < newTodos.length; i++) {
        index++
        if (newTodos[i].id == action.payload.id) {
          break;
        }
      }
      if (index != -1) {
        newTodos[index] = action.payload
        return newTodos
      }
  }
    return state;
};
