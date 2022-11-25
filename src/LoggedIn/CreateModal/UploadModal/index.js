import React, { useEffect } from 'react';
import "./uploadmodal.css";
import Modal from '../../../Modal';

const UploadModal = ({ status, showModal }) => {

  useEffect(() => {
    if (showModal) {
      document.querySelector(".create").style.overflow = "hidden";
      document.querySelector(".create").scrollTop = 0;
    } else {
      document.querySelector(".create").style.overflow = "scroll";
    }
  }, [showModal])

  return (
    <Modal setShowModal={null} showModal={showModal} type='upload'>
      <div className='default-text flex-center-center'>
        {
          !status 
          ? "Waiting For Database. Please Do Not Close This Window"
          : "Done. Window Will Refresh in 3 Seconds"
        }
      </div>
    </Modal>
  )
}

export default UploadModal