import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {App} from './App';
import firebase from 'firebase';
import {firebaseConfig} from './firebase/config'

firebase.initializeApp(firebaseConfig)

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

const root = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      firebase,
      auth,
      firestore
    }} >
       <App />
    </Context.Provider>
  </React.StrictMode>
,
  root
);
