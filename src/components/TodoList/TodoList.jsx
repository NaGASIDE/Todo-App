import React from 'react';
import { Todo } from './Todo/Todo'
import './style.sass'

export const TodoList = () => {
  return (
    <div className='todo-list' >
      <Todo/>
    </div>
  )
}