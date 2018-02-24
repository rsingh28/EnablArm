const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(3000, () => console.log('Hack Valley Project listening on port 3000!'));