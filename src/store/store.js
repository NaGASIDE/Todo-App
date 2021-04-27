import { createStore } from 'redux'
import { todoReducer as todo } from './Todo/reducer'
import { reducers } from './reducers'

export const store = createStore(todo)