import React, { useState } from 'react';
import { Modal } from '../../../utilities/CreateModal/Modal'
import { FiSettings } from 'react-icons/fi'
import { IoMdHelp } from 'react-icons/io'
import { AiOutlineUser } from 'react-icons/ai'
import './style.sass'

export function UserPanel({className}) {

  const [isOpen, setIsOpen] = useState(false)
  
  return ( 
    <>
      <div className={`icon`} onClick={() => setIsOpen(true)}>
        {
          className === `settings` ? <FiSettings/> : 
           className === `help` ? <IoMdHelp/> : <AiOutlineUser />
        }
      </div> 
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      </Modal>
    </>
  )
}
