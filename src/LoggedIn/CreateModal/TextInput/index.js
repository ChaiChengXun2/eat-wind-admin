import React from 'react';

const TextInput = ({ title, setData }) => {
  return (
    <section className='flex-center-center'>
      <label className='default-text'>*{title}: </label>
      <input className='default-text' placeholder='' autoComplete='off' type="text" onChange={(e) => {setData(prev => ({...prev, [`${title}`]: e.target.value}))}}></input>
    </section>
  )
}

export default TextInput