import React, { useState } from 'react';
import axios from 'axios';

const Dropbox = () => {
    const [file, setFile] = useState(null);
    const [responseArray, setResponseArray] = useState([]);

    const handleFileChange = (event) => {
        console.log('File selected:', event.target.files[0]);
        setFile(event.target.files[0]);
    };

    const handleFileUpload = async () => {
        if (!file) {
            alert('Please select a file first!');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            console.log('Uploading file...');
            const response = await axios.post('http://localhost:3000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Server response:', response.data);
            setResponseArray(response.data.data);
        } catch (error) {
            console.error('Error uploading file:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Request data:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
        }
    };

    return (
        <div>
            <h1>Upload a Text File</h1>
            <input type="file" onChange={handleFileChange} accept=".txt" />
            <button onClick={handleFileUpload}>Upload</button>
            <h2>Response Data:</h2>
            <pre>{JSON.stringify(responseArray, null, 2)}</pre>
        </div>
    );
};

export default Dropbox;
