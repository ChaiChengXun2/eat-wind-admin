import React, { useEffect, useState } from 'react';
import "./editmodal.css";
import Text from './Text';
import { db } from "../../../database";
import { get, ref, update } from 'firebase/database';
import { useCallback } from 'react';
import Modal from "../../../Modal";

const EditModal = ({ editModal, setEditModal, id, data }) => {

  const [updateData, setUpdateData] = useState({})

  useEffect(() => {
    setUpdateData({
      Title: undefined,
      Type: undefined,
      Location: undefined,
      Author: undefined, 
      Description: undefined,
    })
  }, [editModal])

  const handleUpdate = useCallback((e) => {
    e.currentTarget.disabled = true; 
    get(ref(db, `/destinations/${id}`)).then((snapshot) => {
      if (snapshot.exists()) {
        update(ref(db, `/destinations/${id}`), {
          Title: updateData.Title === undefined ? data.Title : updateData.Title,
          Type: updateData.Type === undefined ? data.Type : updateData.Type,
          Location: updateData.Location === undefined ? data.Location : updateData.Location,
          Author: updateData.Author === undefined ? data.Author : updateData.Author, 
          Description: updateData.Description === undefined ? data.Description : updateData.Description,
          Banner: data.Banner,
          Image1: data.Image1, 
          Image2: data.Image2,
          Image3: data.Image3,
          Image4: data.Image4,
          Image5: data.Image5,
          Image6: data.Image6
        })
      } else {
        alert("An error has occured")
      }
    }).catch((err) => {
      alert(err)
    })
    setTimeout(() => {
      setEditModal(false);
    }, 1000);
  }, [setEditModal, data, updateData, id])

  return (
    <Modal type="edit flex-center-center" showModal={editModal} setShowModal={setEditModal}>
      <form>
        <Text data={data} title='Title' setUpdateData={setUpdateData} />
        <Text data={data} title='Type' setUpdateData={setUpdateData} />
        <Text data={data} title='Location' setUpdateData={setUpdateData} />
        <Text data={data} title='Author' setUpdateData={setUpdateData} />
        <Text data={data} title='Description' setUpdateData={setUpdateData} />
      </form>
      <button className='default-button' onClick={handleUpdate}>Update</button>
    </Modal>
  )
}

export default EditModal