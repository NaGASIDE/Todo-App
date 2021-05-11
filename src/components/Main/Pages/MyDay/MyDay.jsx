import React, { useContext } from 'react';
import { Date } from './Date/Date'
import { Sort } from './Sort/Sort'
import { Suggestions } from './Suggestions/Suggestions'
import { TodoInput } from '../../../TodoInput/TodoInput'
import { TodoList } from '../../../TodoList/TodoList'
import { ThemeContext } from '../../Main'
import './style.sass'

export function MyDay() {

  let themeContext = useContext(ThemeContext)

  return (
    <div className={`myday ${themeContext}`} >
       <h1 className={`myday-title  ${themeContext}`} >MyDay</h1>
       <Date />
       <Sort />
       <Suggestions />
       <TodoInput />
       <TodoList />
    </div>
  )
}