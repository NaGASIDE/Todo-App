import React from 'react';
import {Logo} from './Logo/Logo'
import {Search} from './Search/Search'
import {UserPanel} from './UserPanel/UserPanel'
import './style.sass'


export function Header() {
   return (
   <div className='header' >
     <Logo />
     <Search />
     <UserPanel />
  </div>)

}