import React from 'react'
import { useContextMenu } from './useContextMenu'
import { Motion, spring } from 'react-motion'
import './style.sass'

  
export function ContextMenu ({menu}) {
    
  const { xPos, yPos, showMenu } = useContextMenu();
  
  return (
    <Motion
      defaultStyle={{ opacity: 0 }}
      style={{ opacity: !showMenu ? spring(0) : spring(1) }}
    >
      {(interpolatedStyle) => (
        <>
          {showMenu ? (
            <div
              className="context-menu"
              style={{
                top: yPos,
                left: xPos,
                opacity: interpolatedStyle.opacity,
              }}
            >
           {menu}
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </Motion>
  )
}