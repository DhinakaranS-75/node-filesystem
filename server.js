const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// API endpoint to create a text file with current timestamp
app.post('/createFile', (req, res) => {
  const folderPath = 'path/to/your/folder'; // Replace with your desired folder path
  const currentDate = new Date().toISOString().replace(/[-:.]/g, ''); // Format current date as 'yyyyMMddThhmmss'
  const fileName = `${currentDate}.txt`;
  const filePath = path.join(folderPath, fileName);

  fs.writeFile(filePath, currentDate, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create file' });
    } else {
      res.json({ message: 'File created successfully' });
    }
  });
});

// API endpoint to retrieve all text files in a particular folder
app.get('/files', (req, res) => {
  const folderPath = 'C:\Users\DHINAKARAN S\Desktop\NODE\node-app\node-filesystem.txt'; // Replace with your desired folder path

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to read files' });
    } else {
      const textFiles = files.filter((file) => path.extname(file) === 'node-filesystem.txt');
      res.json({ files: textFiles });
    }
  });
});

// Start the server
app.listen(8080, () => {
  console.log('Server is running on port 3000');
});
