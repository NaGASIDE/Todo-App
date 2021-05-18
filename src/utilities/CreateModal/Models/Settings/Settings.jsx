import React from 'react'
import { useSpring, animated } from 'react-spring'

export const Settings = () => {

  const animate = useSpring({
    to: {opacity: 1},
    from: {opacity: 0}
  })

  return (
    <animated.div style={animate} >
      <h2 className="settings-title">Settings</h2>
        <div className="settings-block">
          <h4 className="block-title">General</h4>
          <div className="settings-block-item">
            {' '}
            Add new tasks on top <button className="settings-block-item-button">on </button>{' '}
          </div>
          <div className="settings-block-item">
            {' '}
            Add new tasks on top <button className="settings-block-item-button">on </button>{' '}
          </div>
          <div className="settings-block-item">
            {' '}
            Add new tasks on top <button className="settings-block-item-button">on </button>{' '}
          </div>
          <div className="settings-block-item">
            {' '}
            Add new tasks on top <button className="settings-block-item-button">on </button>{' '}
          </div>
          <div className="settings-block-item">
            {' '}
            Add new tasks on top <button className="settings-block-item-button">on </button>{' '}
          </div>
        </div>
        <div className="settings-block">
          <h4 className="block-title">Smart List</h4>
          <div className="settings-block-item">
            {' '}
            Add new tasks on top <button className="settings-block-item-button">on </button>{' '}
          </div>
          <div className="settings-block-item">
            {' '}
            Add new tasks on top <button className="settings-block-item-button">on </button>{' '}
          </div>
          <div className="settings-block-item">
            {' '}
            Add new tasks on top <button className="settings-block-item-button">on </button>{' '}
          </div>
          <div className="settings-block-item">
            {' '}
            Add new tasks on top <button className="settings-block-item-button">on </button>{' '}
          </div>
          <div className="settings-block-item">
            {' '}
            Add new tasks on top <button className="settings-block-item-button">on </button>{' '}
          </div>
        </div>
    </animated.div>
  )
}