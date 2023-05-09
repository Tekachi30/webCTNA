const session = require('express-session');
const bodyParser = require('body-parser');
const express = require('express');

require('./src/config/connect.js');

const app = express();
// Khởi động máy chủ
const port = 3000;
app.listen(port, () => {
  console.log(`API đang chạy : http://localhost:${port}/`);
});


// Sử dụng body-parser cho các phương thức POST và PUT
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sử dụng express-session để lưu trữ session
app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: true
}));