// src/App.js
import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import FileReview from './components/FileReview';

function App() {
  const [uploadedFiles, setUploadedFiles] = useState({
    image: { original: null, compressed: null },
    audio: { original: null, compressed: null },
    video: { original: null, compressed: null },
  });

  const handleFileUpload = (data) => {
    const { originalUrl, compressedUrl, type } = data;
    const fileType = type.split('/')[0];

    setUploadedFiles((prevFiles) => ({
      ...prevFiles,
      [fileType]: {
        original: { url: originalUrl, type: type },
        compressed: { url: compressedUrl, type: type },
      },
    }));
  };

  return (
    <div className="App">
      <h1>Upload and Review Files</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <FileUpload type="image" onFileUpload={handleFileUpload} />
          <FileReview originalFile={uploadedFiles.image.original} compressedFile={uploadedFiles.image.compressed} />
        </div>
        <div>
          <FileUpload type="audio" onFileUpload={handleFileUpload} />
          <FileReview originalFile={uploadedFiles.audio.original} compressedFile={uploadedFiles.audio.compressed} />
        </div>
        <div>
          <FileUpload type="video" onFileUpload={handleFileUpload} />
          <FileReview originalFile={uploadedFiles.video.original} compressedFile={uploadedFiles.video.compressed} />
        </div>
      </div>
    </div>
  );
}

export default App;
