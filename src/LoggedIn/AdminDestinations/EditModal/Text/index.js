import React from 'react';

const Text = ({ data, title, setUpdateData }) => {
  return (
    <section className='flex-center-center'>
      <label className='default-text'>{title}: </label>
      <input onChange={(e) => setUpdateData(prev => ({...prev, [`${title}`]: e.target.value}))} className='default-text' placeholder={data[`${title}`]} autoComplete='off' type="text"></input>
    </section>
  )
}

export default Text