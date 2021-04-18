import { AppRouter } from 'components/AppRouter/AppRouter'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import styles from './App.module.scss'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'


export const App = () => {
  return (
    <BrowserRouter>
     <Header /> 
     <AppRouter />
    </BrowserRouter>
  )
}
