import React, { useState } from 'react';
import "./imageinput.css";
import { app } from "../../../firebase";
import { getFunctions, httpsCallable } from "firebase/functions";

const firebaseFunctions = getFunctions(app, "europe-west3");

const ImageInput = ({ title, setData }) => {
  const [status, setStatus] = useState(false);
  const [pending, setPending] = useState(false);
  const uploadImage = httpsCallable(firebaseFunctions, "uploadImage");

  const handleUpload = e => {
    var reader = new FileReader(); 
    var fileFromHTML = e.currentTarget.files[0];
    reader.onloadend = () => {
      setPending(true);
      uploadImage({img: reader.result, name: fileFromHTML.name}).then((result) => {
        if (result.data === "Users must be logged in to upload") {
          console.log("walao wei cibai. what you trying to do wor");
          alert("Only Authenticated Users Can Upload.");
          window.location.reload();
        } else {
          setData(prev => ({...prev, [`${title}`]: result.data}));
          setPending(false);
          setStatus(true);
        }
      })
    }
    reader.readAsDataURL(fileFromHTML);
  }

  return (
    <section className='flex-center-center'>
      <label className='default-text'>{title}: </label>
      {
        !status 
        ? pending ? <div className='default-text uploaded flex-center-center'>Uploading Please Wait</div> : <input onChange={handleUpload} type='file' className='image-input'/>
        : <div className='default-text uploaded flex-center-center'>Picture Uploaded</div>
      }
    </section>
  )
}

export default ImageInput