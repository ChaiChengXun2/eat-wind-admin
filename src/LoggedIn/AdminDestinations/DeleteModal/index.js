import React from 'react';
import "./deletemodal.css";
import { db } from "../../../database";
import { get, ref, remove } from 'firebase/database';
import { useCallback } from 'react';
import Modal from "../../../Modal";

const DeleteModal = ({ deleteModal, setDeleteModal, id }) => {

  const handleDelete = useCallback((e) => {
    e.currentTarget.disabled = true;
    get(ref(db, `/destinations/${id}`)).then((snapshot) => {
      if (snapshot.exists()) {
        remove(ref(db, `/destinations/${id}`));
      } else {
        alert("An Error Has Occured");
      }
    }).catch((err) => {
      alert(err.message);
    })
    setDeleteModal(false);
  }, [id, setDeleteModal])

  return (
    <Modal type="delete flex-center-center" showModal={deleteModal} setShowModal={setDeleteModal}>
      <div className='default-text'>Are you sure you want to delete? </div>
      <div className='buttons flex-center-center'>
        <button className='default-button' onClick={handleDelete}>Yes</button>
        <button className='default-button' onClick={() => setDeleteModal(false)}>No</button>
      </div>
    </Modal>
  )
}

export default DeleteModal