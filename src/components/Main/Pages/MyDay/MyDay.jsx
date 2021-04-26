import React from 'react';
import { Date } from './Date/Date'
import { Sort } from './Sort/Sort'
import { Suggestions } from './Suggestions/Suggestions'
import { TodoInput } from '../../../TodoInput/TodoInput'
import { TodoList } from '../../../TodoList/TodoList'
import './style.sass'

export function MyDay() {
  return (
    <div className='myday' >
       <h1 className='myday-title' >MyDay</h1>
       <Date />
       <Sort />
       <Suggestions />
       <TodoInput />
       <TodoList />
    </div>
  )
}