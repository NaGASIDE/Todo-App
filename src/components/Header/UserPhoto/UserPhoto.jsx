import React, { useState } from 'react';
import { auth } from '../../../firebase/config';
import { LogOutModal } from '../../../utilities/CreateModal/LogOutModal';
import './style.sass';

export const UserPhoto = ({ user }) => {
  const [showLogoutPanel, setShowUserPanel] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowUserPanel(!showLogoutPanel)}
        className="user-photo"
        style={{ background: ` url(${user.photoURL}) no-repeat`, backgroundSize: `3.5vh` }}
      />
      <LogOutModal isOpen={showLogoutPanel} open={showLogoutPanel} onClose={() => setShowUserPanel(false)}>
        <div className="logout-modal">
          <div className={`logout-logo`}>Bekzat Ashken TO-DO</div>
          <button className="logout-button" onClick={() => auth.signOut()}>
            Sing Out
          </button>
          <div
            className={`logout-modal-user-photo`}
            className="user-photo"
            style={{
              background: ` url(${user.photoURL}) no-repeat`,
              backgroundSize: `10vh`,
              height: `10vh`,
              width: `10vh`,
              position: `absolute`,
            }}
          ></div>
          <div className="logout-modal-block">
            <p>{user.displayName}</p>
            <hr />
            <p className={`user-email`}>{user.email}</p>
          </div>
        </div>
      </LogOutModal>
    </>
  );
};