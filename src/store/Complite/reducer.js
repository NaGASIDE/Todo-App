import { compliteActionsTypes } from './action'
import { compliteTodos } from './state'

export const compliteReducer = (state = compliteTodos, action) => {
 let newCompliteTodos;
  switch (action.type) {
    case compliteActionsTypes:
      newCompliteTodos = [...state]
      newCompliteTodos.push(action.payload)
      return newCompliteTodos
  }
  return state
}