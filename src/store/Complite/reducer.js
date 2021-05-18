import { compliteActionsTypes } from './action'
import { compliteTodos } from './state'

export const compliteReducer = (state = compliteTodos, action) => {
 let newCompliteTodos;
  switch (action.type) {
    case compliteActionsTypes.COMPLITE_TODO:
      newCompliteTodos = [...state]
      newCompliteTodos.push(action.payload)
      return newCompliteTodos
    case compliteActionsTypes.DELETE_COMPLETE_TODO:
      newCompliteTodos = [...state];
      newCompliteTodos = newCompliteTodos.filter(todo => todo.id != action.payload)
      return newCompliteTodos;
  }
  return state
}