import React, { useState, useEffect } from 'react';
import "./admin.css";
import "./responsive.css";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./firebase";
import LoggedOut from "./LoggedOut";
import LoggedIn from './LoggedIn';

const auth = getAuth(app);

const Admin = () => {
  const [user, setUser] = useState(false);

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then(() => {
      setUser(auth.currentUser)
    }).catch(error => {
      alert(error.code);
    })
  }

  const logOut = () => {
    signOut(auth).then(() => {
      setUser(auth.currentUser)
    })
  }

  useEffect(() => {
    document.title = "Admin Panel | Eat Wind"
  }, [])

  return (
    <div className='admin content flex-center-center'>
      {user ? <LoggedIn logOut={logOut} /> : <LoggedOut signIn={signIn}/> }
    </div>
  )
}

export default Admin