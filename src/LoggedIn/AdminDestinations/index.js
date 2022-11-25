import React, { useState } from 'react';
import "./admindestination.css";
import "./responsive.css"
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';

const AdminDestinations = ({ data, id }) => {

  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  return (
    <div className='flex-center-between admin-destination'>
      <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} id={id} /> 
      <EditModal editModal={editModal} setEditModal={setEditModal} id={id} data={data} /> 
      <div className='default-title'>{data.Title}</div>
      <div className='buttons flex-center-center'>
        <div className='default-button flex-center-center' onClick={() => setEditModal(true)}><FiEdit />Edit</div>
        <div className='default-button flex-center-center' onClick={() => setDeleteModal(true)}><MdDelete />Delete</div>
      </div>
    </div>
  )
}

export default AdminDestinations  