const express = require('express');
const path = require('node:path');
const indexRouter = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.listen(PORT, (error) => {
  if (error) {
    console.error('error running server: ', error);
  }
  console.log('server running on port: ', PORT);
});
