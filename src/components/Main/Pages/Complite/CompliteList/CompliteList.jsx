import React, { useContext } from 'react'
import { CompliteTodo } from './ConpliteTodo/CompliteTodo'
import { useSelector } from 'react-redux'
import { ThemeContext } from '../../../Main'
import './style.sass'

export const CompliteList = () => {
  let completes = useSelector((state) => state.complete)
  const theme = useContext(ThemeContext)
  let s = ``
   if (completes.length > 4) {s = `none`}
  return (
    <div className={`complite-list complite-list-${theme}`} style={{background: s}}>
      {completes.map((complete) => {
        return <CompliteTodo key={complete.id} todo={complete} />
      })}
    </div>
  )
}