const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Chào mừng đến với Hệ thống quản lý định danh đất đai');
});

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});