import { combineReducers } from 'redux'

import { todoReducer as todo } from './Todo/reducer'

export const reducers = combineReducers({
  todo
})