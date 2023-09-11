const express = require('express');
const cors = require('cors');
const router = require('./routers');
const basicErrorHandler = require('./middlewares/errors/basic');
const sequelizeErrorHandler = require('./middlewares/errors/sequelizeHandlers');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(sequelizeErrorHandler);
app.use(basicErrorHandler);

module.exports = app;