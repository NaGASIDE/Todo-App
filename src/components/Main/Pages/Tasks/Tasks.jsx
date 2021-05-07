import React from 'react';
import { TodoInput } from '../../../TodoInput/TodoInput'
import { TodoList } from '../../../TodoList/TodoList'
import './style.sass'

export const Tasks = () => {
  return (
    <div >
      <h2 className='tasks-title' > Tasks </h2>
      <TodoInput /> 
      <TodoList />
    </div>
  )
}