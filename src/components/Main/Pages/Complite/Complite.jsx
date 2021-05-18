import React, { useContext } from 'react'
import { CompliteList } from './CompliteList/CompliteList'
import { ThemeContext } from '../../Main'
import "./style.sass"

export const Complite = () => {

  const theme = useContext(ThemeContext)
  
  return (
    <div className={`search ${theme}`} >
      <h1 className={`complite-title ${theme}`} >Complited Tasks</h1>
      <CompliteList />
    </div>
  )
}