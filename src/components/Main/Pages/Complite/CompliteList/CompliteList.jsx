import React, { useContext } from 'react'
import { CompliteTodo } from './ConpliteTodo/CompliteTodo'
import { ThemeContext } from '../../../Main'
import './style.sass'

export const CompliteList = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className={`complite-list complite-list-${theme}`}>
        <CompliteTodo />
        <CompliteTodo />
        <CompliteTodo />
        <CompliteTodo />
        <CompliteTodo />
        <CompliteTodo />
        <CompliteTodo />
    </div>
  )
}