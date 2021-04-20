import { AppRouter } from 'components/AppRouter/AppRouter'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.sass'
import { Header } from './components/Header/Header'

export const App = () => {
  return (
    <BrowserRouter>
     <Header /> 
     <AppRouter />
    </BrowserRouter>
  )
}
