import React, { useState } from 'react';

const FileUploadPreview = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
    }
  };

  const handleUpload = () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost:3333/files/', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.text())
      .then(data => {
        alert('File uploaded successfully');
        console.log(data);
      })
      .catch(error => {
        alert('Error uploading file');
        console.error(error);
      });
  };

  return (
    <div className="upload-container">
      <input 
        type="file" 
        onChange={handleFileChange} 
        className="upload-input"
      />
      <button onClick={handleUpload} className="upload-button">
        Upload
      </button>
      <div className="preview-container">
        {previewUrl && (
          <iframe 
            src={previewUrl} 
            className="preview" 
            title="Document Preview" 
          />
        )}
      </div>
    </div>
  );
};

export default FileUploadPreview;
