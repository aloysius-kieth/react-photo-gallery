import { useState } from 'react';
import ImageGrid from './components/ImageGrid/ImageGrid';
import Modal from './components/Modal/Modal';
import Title from './components/Title/Title';
import UploadForm from './components/UploadForm/UploadForm';
import './styles/App.scss';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className='App'>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
