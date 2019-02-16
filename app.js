const express =  require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res, next)=> {
  res.send('hello')
})

module.exports = app;
