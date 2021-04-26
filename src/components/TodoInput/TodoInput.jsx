import React from 'react';
import './style.sass'

export const TodoInput = () => {
  return (
    <div>
      <input className='todo-input' type='text' placeholder='  Add a task' />
    </div>
  )
}