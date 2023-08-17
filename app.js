const express = require('express');
const router = require('./routers');
const basicErrorHandler = require('./middlewares/errors/basic');
const sequelizeErrorHandler  = require('./middlewares/errors/sequelizeHandlers');

const app = express();

app.use(express.json());
app.use(router);
app.use(sequelizeErrorHandler);
app.use(basicErrorHandler);

module.exports = app;