import { themeActionTypes } from './action'
import { initialState } from './state'

export let themeReducer = (state = initialState, action) => {
  let theme;
  switch (action.type) {
    case themeActionTypes.SET_THEME:
     action.payload == 'light' ? theme = 'dark' : theme = 'light'
      return {...state, theme: theme}
  }
  return state
}
