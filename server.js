const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Chào mừng bạn đến với Hệ thống Quản lý Định danh Đất đai');
});

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});