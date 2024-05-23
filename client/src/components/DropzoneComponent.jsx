import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const DropzoneComponent = () => {
    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];

        // Example: Send file to server
        const formData = new FormData();
        formData.append('file', file);

        fetch('/upload', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('File uploaded successfully:', data);
            })
            .catch((error) => {
                console.error('Error uploading file:', error);
            });
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} style={{ border: '2px dashed #000', padding: '20px', textAlign: 'center' }}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
    );
};

export default DropzoneComponent;
