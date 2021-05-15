import React, { useState } from 'react';
import './style.sass'

export const UserPhoto = ({user}) => {

const [showLogoutPanel, setShowUserPanel] = useState(false)
console.log(showLogoutPanel)

  return (
  <>
    <div
      onClick={() => setShowUserPanel(!showLogoutPanel)}
      className="user-photo"
      style={{ background: ` url(${user.photoURL}) no-repeat`, backgroundSize: `3.5vh` }}
    />
  </>
  );
};
