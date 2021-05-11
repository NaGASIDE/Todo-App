import React, { useContext } from 'react';
import { TodoInput } from '../../../TodoInput/TodoInput'
import { TodoList } from '../../../TodoList/TodoList'
import { ThemeContext } from '../../Main'
import './style.sass'
export function Important() {
  const theme = useContext(ThemeContext)
  return (
    <div className={`importamt ${theme}`} >
      <h2 className={`importamt-title ${theme}`} >Important</h2>
       <TodoInput />
       <TodoList />
    </div>
  )
}