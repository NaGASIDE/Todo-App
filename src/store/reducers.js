import { combineReducers } from 'redux'
import { todoReducer as todo } from './Todo/reducer'
import { themeReducer as theme } from './Theme/reducer'

export let reducers = combineReducers({
  todo,
  theme
})