// Create web server
// Run: node comments.js
// Output: Web server running on http://localhost:3000
// Open browser and type http://localhost:3000
// Output: Comments API
// Open Postman and test the API

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Comments API');
});

app.get('/comments', (req, res) => {
    res.send('Comments API');
});

app.post('/comments', (req, res) => {
    res.send('Comment created');
});

app.put('/comments/:id', (req, res) => {
    res.send('Comment updated');
});

app.delete('/comments/:id', (req, res) => {
    res.send('Comment deleted');
});

app.listen(port, () => {
    console.log(`Web server running on http://localhost:${port}`);
});