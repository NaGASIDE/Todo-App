import React, { useState } from 'react';
import { Modal } from '../../../utilities/CreateModal/Modal';
import { FiSettings } from 'react-icons/fi';
import { IoMdHelp } from 'react-icons/io';
import { AiOutlineUser, AiOutlineClose } from 'react-icons/ai';
import { Settings } from '../../../utilities/CreateModal/Models/Settings/Settings'
import { Help } from '../../../utilities/CreateModal/Models/Help/Help'
import { Developer } from '../../../utilities/CreateModal/Models/Developer/Developer'
import './style.sass';

export function UserPanel({ className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettings, setIsSettings] = useState(false)
  const [isHelp, setIsHelp] = useState(false)
  const [isDeveloper, setIsDeveloper] = useState(false)

  return (
    <>
      <div className={`icon`} onClick={() => setIsOpen(true)}>
        {
          className === `settings` ? <FiSettings onClick={() => setIsSettings(true)} /> :
          className === `help` ? <IoMdHelp onClick={() => setIsHelp(true)} /> :
                      <AiOutlineUser onClick={() => setIsDeveloper(true)} />
        }
      </div>
      <Modal isOpen={isOpen} open={isOpen} onClose={() => setIsOpen(false)}>
            {isSettings  ? <Settings /> : ``}
            {isHelp      ? <Help /> : ``}
            {isDeveloper ? <Developer /> : ``}
      </Modal>
    </>
  );
}

