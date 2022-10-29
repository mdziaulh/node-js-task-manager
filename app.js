const express = require('express');
const app = express();

const tasks = require('./routes/tasks');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// Middlewire
app.use(express.static('./public'));
app.use(express.json());

// Routers
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

module.exports = app;