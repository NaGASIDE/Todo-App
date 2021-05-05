import React from 'react';
import './style.sass'
import firebase from 'firebase'
import { auth } from '../../firebase/config'

export function Login() {
 
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const user = await auth.signInWithPopup(provider)
    console.log(user)
  }

  return (
    <div className='back' >
      <div className='loginLogo' ></div>
      <h1 className='todoTittle' >Bekzat Ashken To-Do</h1>
      <p className='quote'>When life gives you lemons, make lemonade</p>
      <button className='LoginButton' onClick={login} >
        sign with google
      </button>
      <a className='loginLink' href='https://www.toodledo.com/info/whyuse.php#:~:text=One%20of%20the%20most%20important,organized%20and%20stay%20mentally%20focused.' >Why should you use To Do ?</a>
    </div>
  )
}