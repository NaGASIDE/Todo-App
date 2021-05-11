import React, {useContext} from 'react';
import { ThemeContext } from '../../Main'
import { TodoInput } from '../../../TodoInput/TodoInput'
import { TodoList } from '../../../TodoList/TodoList'
import './style.sass'

export function Planed() {
  const theme = useContext(ThemeContext)
  return (
    <div className={`planed ${theme} `} >
      <h2 className={`planed-title ${theme} `} >Planed</h2>
      <TodoInput /> 
      <TodoList />
    </div>
  )
}