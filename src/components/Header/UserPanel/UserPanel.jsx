import React, { useState } from 'react';
import { Modal } from 'utilities/CreateModal/Modal'
import './style.sass'

export function UserPanel({className}) {

  const [isOpen, setIsOpen] = useState(false)

  return ( 
    <>
      <div className={`icon ${className}`} onClick={() => setIsOpen(true)} />
      <Modal open={isOpen} onClose={() => setIsOpen(false)} >
        Fence Color
      </Modal>
    </>
  )
}
