import React from 'react'

const OptionalText = ({ data, title, setUpdateData, index, updateData }) => {
  return (
    <section className='flex-center-center'>
      <label className='default-text'>{title}: </label>
      <input 
        onChange={(e) => {
            let penis = updateData.OptionalDes;
            penis[index] = e.target.value;
            setUpdateData(prev => ({...prev, OptionalDes: penis}))
        }} 
      className='default-text' placeholder={data} autoComplete='off' type="text"></input>
    </section>
  )
}

export default OptionalText