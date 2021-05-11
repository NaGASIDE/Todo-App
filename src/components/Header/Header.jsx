import React, { useState } from 'react';
import { Logo } from './Logo/Logo';
import { Search } from './Search/Search';
import { UserPanel } from './UserPanel/UserPanel';
import { NavLink } from 'react-router-dom';
import { SwitchTheme } from './SwitchTheme/SwitchTheme'
import { LOGIN_ROUTE } from '../../utilities/consts';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/config';
import './style.sass';

export function Header() {
  const [user] = useAuthState(auth);
  return (
    <div className="header">
      <Logo />
      {user ? (
        <>
          <Search />
          <SwitchTheme />
          <UserPanel className="settings" />
          <UserPanel className="help" />
          <UserPanel className="aboutDev" />
          <div style={{background:  ` url(${user.photoURL}) no-repeat`,
                       backgroundSize: `3.5vh`}} className='user-photo' ></div>
          <button className="buttomExit" onClick={() => auth.signOut()}>
            exit
          </button>
        </>
      ) : (
        <NavLink to={LOGIN_ROUTE}>
          <button className="buttomLoggin">Login</button>
        </NavLink>
      )}
    </div>
  );
}
