import { createStore } from 'redux'
import { reducers } from './reducers'
import { todoReducer } from './Todo/reducer'
import { themeReducer} from './Theme/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(reducers)