import React, { useState } from 'react';
import "./optionaldata.css";
import { AiFillDelete } from "react-icons/ai";

const OptionalData = ({ setNumber, setOpt }) => {

  const [data, setData] = useState("");

  return (
    <section className='flex-center-between optional-data optional-des'>
      <input className='default-text other' placeholder='' autoComplete='off' type="text" onChange={e => setData(e.target.value)}></input>
      <div className='default-button' onClick={() => {
        setOpt(prev => [...prev, data])
      }}>Done</div>
      <div onClick={() => setNumber(prev => prev - 1)}><AiFillDelete /></div>
    </section>
  )
}

export default OptionalData