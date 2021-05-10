import React from 'react';
import { VscSearch } from 'react-icons/vsc'
import './style.sass'

export function Search() {
    return (
    <>
      <VscSearch className='search-icon' />
      <input className='input' />   
    </>
    )
  }