import React from 'react';
import { Logo } from './Logo/Logo';
import { SearchInput } from './SearchInput/SearchInput';
import { UserPanel } from './UserPanel/UserPanel';
import { NavLink } from 'react-router-dom';
import { SwitchTheme } from './SwitchTheme/SwitchTheme'
import { LOGIN_ROUTE } from '../../utilities/consts';
import { useAuthState } from 'react-firebase-hooks/auth';
import { UserPhoto } from './UserPhoto/UserPhoto'
import { auth } from '../../firebase/config';
import './style.sass';

export function Header() {
  const [user] = useAuthState(auth);
  return (
    <div className="header">
      <Logo />
      {user ? (
        <>
          <SearchInput />
          <SwitchTheme />
          {/* <UserPanel className="settings" /> */}
          <UserPanel className="help" />
          <UserPanel className="aboutDev" />
          <UserPhoto user={user}  />
        </>
      ) : (
        <NavLink to={LOGIN_ROUTE}>
          <button className="buttomLoggin">Login</button>
        </NavLink>
      )}
    </div>
  );
}
