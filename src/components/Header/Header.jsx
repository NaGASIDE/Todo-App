import React, { useState, useContext } from 'react';
import {Logo} from './Logo/Logo'
import {Search} from './Search/Search'
import {UserPanel} from './UserPanel/UserPanel'
import { NavLink} from 'react-router-dom'
import './style.sass'
import { LOGIN_ROUTE } from 'utilities/consts';
import {useAuthState} from 'react-firebase-hooks/auth'
import {Context} from '../../index'


export function Header() {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)
  const [isOpen, setIsOpen] = useState(false);
   return (
   <div className='header' >
     <Logo />
     <Search />
     <UserPanel className='settings' />
     <UserPanel className='help'   />
     <UserPanel className='aboutDev'   />
    {user ?
    <button className='user' onClick={() => auth.signOut()}  >выйти</button>
    :
      <NavLink to={LOGIN_ROUTE} >
         <button  >Login</button>
      </NavLink>
        }
  </div>)
}