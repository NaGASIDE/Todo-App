import { importantTodosTypes } from './action';
import { importantTodos } from './state'

export const importantTodosReducer = (state = importantTodos, action) => {
  let newImportantTodos;
  switch (action.type) {
    case importantTodosTypes.ADD_IMPORTANT_TODO:
      newImportantTodos = [...state];
      newImportantTodos.push(action.payload)
      return newImportantTodos
    case importantTodosTypes.DELETE_IMPORTANT_TODO:
      newImportantTodos = [...state];
      newImportantTodos = newImportantTodos.filter(todo => todo.id != action.payload)
      return newImportantTodos;
    case importantTodosTypes.SET_IMPORTANT_TODO:
      newImportantTodos = [...state];
      let index = -1
      for (let i = 0; i < newImportantTodos.length; i++) {
        index++
        if (newImportantTodos[i].id == action.payload.id) {
          break;
        }
      }
      if (index != -1) {
        newImportantTodos[index] = action.payload
        return newImportantTodos
      }
  }
    return state;
};
