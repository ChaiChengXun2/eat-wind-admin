import React from 'react';
import "./modal.css";
import { motion, AnimatePresence } from 'framer-motion';

const modal = {
  hidden: {
    y: "15vh",
    opacity: 0 
  }, 
  visible: {
    y: 0,
    opacity: 1, 
    transition: { 
      type: "tween",
      ease: "easeOut", 
      duration: 0.2,
    }
  },
  exit: {
    y: "10vh",
    opacity: 0,
    transition: { 
      type: "tween",
      ease: "easeOut", 
      duration: 0.15,
    }
  }
}

const backdrop = { 
  visible: {opacity: 1},
  hidden: {
    opacity: 0,
    transition: {duration: 0}
  }
}

const Modal = ({ showModal, setShowModal, children, type }) => {
  return (
    <AnimatePresence>
      { showModal && 
        (<motion.div className='backdrop flex-end-center'
          variants={backdrop}
          initial="hidden"
          animate="visible"
        >
          <div className='temp' onClick={() => setShowModal(false)}></div>
          <motion.div className={`modal flex-center-start ${type}`}
            variants={modal}
            initial="hidden"
            animate="visible"
            exit='exit'
          >
            {children}
          </motion.div>
        </motion.div>)
      }
    </AnimatePresence>
  )
}

export default Modal