const express = require('express');
const morgan = require('morgan');
const { Gardener, getGardenerInfo } = require('./models');
const gardenersList = require('./views/gardenersList');
const gardenerPage = require('./views/gardenerPage');

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.redirect('/gardeners');
});

app.get('/gardeners', (req, res, next) => {
  Gardener.findAll()
    .then(gardeners => res.send(gardenersList(gardeners)))
    .catch(next);
});

app.get('/gardeners/:id', (req, res, next) => {
  getGardenerInfo(req.params.id)
    .then(gardenerInfo => {
      if (!gardenerInfo) res.sendStatus(404);
      else res.send(gardenerPage(gardenerInfo));
    })
    .catch(next);
});

module.exports = app;
