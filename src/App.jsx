import React from 'react'
import styles from './App.module.scss'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'


export const App = () => {
  return (
    <>
     <Header /> 
     <Sidebar />
    </>
  )
}
