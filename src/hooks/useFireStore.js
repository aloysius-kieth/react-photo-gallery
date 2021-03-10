import { useState, useEffect } from 'react';
import { fireStore } from '../firebase/config';

const useFireStore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = fireStore
      .collection(collection)
      // order by desending order by created date
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = [];
        // save each snap object to local object
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });

        setDocs(documents);
      });

    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFireStore;
