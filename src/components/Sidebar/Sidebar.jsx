import React from 'react';
import './style.sass'
import { SwitchButton } from './SwitchButton/SwitchButton';

export function Sidebar() {
  return (
    <div className='sidebar' >
      <SwitchButton />
    </div>
  )
}