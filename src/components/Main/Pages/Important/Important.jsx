import React, { useContext } from 'react';
import { useSelector } from 'react-redux'
import { ThemeContext } from '../../Main'
import { ImportantInput } from './ImportantInput/ImportantInput'
import { ImportantList } from './ImportantList/ImportantList'
import './style.sass'
export function Important() {
  const importantTodos = useSelector(state => state.importantTodos)
  const theme = useContext(ThemeContext)
  console.log(importantTodos)
  return (
    <div className={`importamt ${theme}`} >
      <h2 className={`importamt-title ${theme}`} >Important</h2>
       <ImportantInput />
       <ImportantList />
    </div>
  )
}