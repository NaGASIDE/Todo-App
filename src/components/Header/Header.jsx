import React, { useState } from 'react';
import {Logo} from './Logo/Logo'
import {Search} from './Search/Search'
import {UserPanel} from './UserPanel/UserPanel'

import './style.sass'


export function Header() {
  const [isOpen, setIsOpen] = useState(false);
   return (
   <div className='header' >
     <Logo />
     <Search />
     <UserPanel className='settings' />
     <UserPanel className='help'   />
     <UserPanel className='aboutDev'   />
     <UserPanel className='user'  />
  </div>)
}