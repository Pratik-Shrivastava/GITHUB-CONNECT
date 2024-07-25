const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const cors = require('cors');


const app = express();
const PORT = 3000;
app.use(cors());

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
    console.log('File upload request received');

    if (!req.file) {
        console.log('No file received');
        return res.status(400).send('No file uploaded');
    }

    const filePath = path.join(__dirname, req.file.path);
    console.log('File path:', filePath);

    // Read the file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Error reading file');
        }

        // Process the file data
        const fileDataArray = data.split('\n');
        console.log('File data:', fileDataArray);

        // Send the processed data as a response
        res.json({ data: fileDataArray });

        // Optionally, delete the uploaded file after processing
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('Error deleting file:', err);
            } else {
                console.log('File deleted successfully');
            }
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
