import React, { useContext } from 'react'
import { CompliteTodo } from './ConpliteTodo/CompliteTodo'
import { useSelector } from 'react-redux'
import { ThemeContext } from '../../../Main'
import './style.sass'

export const CompliteList = () => {
  let completes = useSelector((state) => state.complete)
  const theme = useContext(ThemeContext)
  console.log(completes)
  return (
    <div className={`complite-list complite-list-${theme}`}>
      {completes.map((complete) => {
        return <CompliteTodo key={complete.id} todo={complete} />
      })}
    </div>
  )
}