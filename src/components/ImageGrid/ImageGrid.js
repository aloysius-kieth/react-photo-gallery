import React from 'react';
import useFireStore from '../../hooks/useFireStore';
import { motion } from 'framer-motion';
import './style.scss';

const ImageGrid = (props) => {
  const { setSelectedImg } = props;

  // get all the images from FireStore
  const { docs } = useFireStore('images');
  console.log(docs);

  return (
    <div className='img-grid'>
      {docs &&
        docs.map((doc) => (
          <motion.div
            className='img-wrap'
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt='uploaded picture'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
