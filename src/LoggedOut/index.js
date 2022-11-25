import React, { useState } from 'react';
import "./loggedout.css";

const LoggedOut = ({ signIn }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='logged-out flex-center-center'>
      <form className='flex-center-center' onSubmit={(e) => {e.preventDefault(); signIn(email, password)}}>
        <section className='flex-center-center'>
          <label className='default-text'>Username: </label>
          <input className='default-text' placeholder='' autoComplete='off' type="text" onChange={e => setEmail(e.target.value)}></input>
        </section>
        <section className='flex-center-center'>
          <label className='default-text'>Password: </label>
          <input className='default-text' placeholder='' autoComplete='off' type="password" onChange={e => setPassword(e.target.value)}></input>
        </section>
        <input type='submit' value='Log In' className='default-button'/>
      </form>
  </div>
  )
}

export default LoggedOut