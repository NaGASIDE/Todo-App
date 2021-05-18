import { combineReducers } from 'redux'
import { todoReducer as todo } from './Todo/reducer'
import { themeReducer as theme } from './Theme/reducer'
import { compliteReducer as complete} from './Complite/reducer'
import { importantTodosReducer as importantTodos } from './Imporatnt/reducer'

export let reducers = combineReducers({
  todo,
  theme,
  complete,
  importantTodos
})