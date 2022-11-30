import React from 'react';
import "./optionaldata.css";
import { AiFillDelete } from "react-icons/ai";

const OptionalData = ({ setNumber }) => {
  return (
    <section className='flex-center-between optional-data optional-des'>
      <input className='default-text other' placeholder='' autoComplete='off' type="text"></input>
      <div onClick={() => setNumber(prev => prev - 1)}><AiFillDelete /></div>
    </section>
  )
}

export default OptionalData