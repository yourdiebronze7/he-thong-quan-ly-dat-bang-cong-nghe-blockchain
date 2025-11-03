const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Land Registration Management System. Your gateway to efficient land management.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});