import React from 'react';
import { themeActions } from '../../../store/Theme/action';
import { useSelector, useDispatch } from 'react-redux';
import { FiSun, FiMoon } from 'react-icons/fi';
import './style.sass';

export function SwitchTheme() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const switchIcon = (theme) => (theme == 'light' ? <FiMoon className='dark' /> : <FiSun className='light' />);
  return (
    <div className="switch-theme">
      <button className="theme-button" onClick={() => dispatch(themeActions.setTheme(theme))}>
        {switchIcon(theme)}
      </button>
    </div>
  );
}
