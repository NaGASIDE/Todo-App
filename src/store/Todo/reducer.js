import { todosActionsTypes } from './action';

export const todoReducer = (state, action) => {
  switch (action.type) {
    case todosActionsTypes.ADD_TODO:
      break;
    case todosActionsTypes.DELETE_TODO:
      break;
    case todosActionsTypes.SET_TODO:
      break;
    default:
      return state;
  }
};
