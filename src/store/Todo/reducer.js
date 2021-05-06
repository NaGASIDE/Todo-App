import { todosActionsTypes } from './action';
import { todos } from './states'

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
      break;
  }
    return state;
};
