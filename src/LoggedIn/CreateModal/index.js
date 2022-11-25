import React, { useState, useEffect } from 'react';
import "./createmodal.css";
import ImageInput from './ImageInput';
import TextInput from "./TextInput";
import { ref, set } from "firebase/database";
import { db } from "../../database";
import UploadModal from "./UploadModal";
import Modal from "../../Modal";

const CreateModal = ({ showCreateModal, setShowCreateModal }) => {

  const [status, setStatus] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [data, setData] = useState({
    Title: undefined, 
    Type: undefined,
    Location: undefined,
    Author: undefined, 
    Description: undefined, 
    Banner: undefined,
    Image1: undefined, 
    Image2: undefined,
    Image3: undefined,
    Image4: undefined,
    Image5: undefined, 
    Image6: undefined 
  })

  const handleSubmit = async (e) => {
    e.currentTarget.disabled = true; 
    console.log(data)
    e.preventDefault(); 
    if (Object.values(data).includes(undefined)) {
      alert("Upload Failed, Some Fields Are Empty.");
      e.currentTarget.disabled = false;
    } else {
      setShowUploadModal(true);
      await set(ref(db, "destinations/" + data.Title.slice(0, 2) + data.Description.slice(0, 2) + data.Location.slice(0, 2)), data);
      setStatus(true);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      return null;
    }
  }

  useEffect(() => {
    if (showCreateModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [showCreateModal])

  return (
    <Modal setShowModal={setShowCreateModal} showModal={showCreateModal} type="create">
      <UploadModal status={status} showModal={showUploadModal}/>
      <form>
        <TextInput title='Title' setData={setData} />
        <TextInput title='Type' setData={setData} />
        <TextInput title='Location' setData={setData} />
        <TextInput title='Author' setData={setData} />
        <TextInput title='Description' setData={setData} />
        <ImageInput title='Banner' setData={setData} />
        <ImageInput title='Image1' setData={setData} />
        <ImageInput title='Image2' setData={setData} />
        <ImageInput title='Image3' setData={setData} />
        <ImageInput title='Image4' setData={setData} />
        <ImageInput title='Image5' setData={setData} />
        <ImageInput title='Image6' setData={setData} />
      </form>
      <button className='default-button submit' onClick={handleSubmit}>Submit</button>
    </Modal>
  )
}

export default CreateModal