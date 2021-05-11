import React, { useContext } from 'react';
import { ThemeContext } from '../../Main'
import { TodoInput } from '../../../TodoInput/TodoInput'
import { TodoList } from '../../../TodoList/TodoList'
import './style.sass'

export const Tasks = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className={`tasks ${theme}`} >
      <h2 className={`tasks-title ${theme}`} > Tasks </h2>
      <TodoInput /> 
      <TodoList />
    </div>
  )
}