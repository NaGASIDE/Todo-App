import React, { useState } from 'react';
import './style.sass'

export function SwitchButton() {

  const [className, setClassName] = useState(`greater`);

  return (
    <div className={className} onClick={() => setClassName(`less`)} ></div>
  )
}