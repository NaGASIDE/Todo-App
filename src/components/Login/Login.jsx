import React, {useContext} from 'react';
import './style.sass'
import {Context} from '../../index'
import firebase from 'firebase'

export function Login() {
  const {auth} = useContext(Context)

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const user = await auth.signInWithPopup(provider)
    console.log(user)
  }

  return (
    <div>
      <button className='LogiButton' onClick={login} >
        Войти с помощью Google
      </button>
    </div>
  )
}