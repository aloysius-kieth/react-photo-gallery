import React from 'react';
import { motion } from 'framer-motion';
import './style.scss';

const Modal = (props) => {
  const { selectedImg, setSelectedImg } = props;

  const handleClick = (e) => {
    // check if clicking on the backdrop and not on the image itself
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null); // close the modal
    }
  };

  return (
    <motion.div
      className='backdrop'
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt='enlarged picture'
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
