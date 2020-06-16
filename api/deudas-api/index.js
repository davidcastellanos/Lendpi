// Entry point
const express = require('express');

const app = express();
const port = process.env.PORT || 4000;
const deudasRequire = require('./src/routes/deudasRoutes.js');

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use('/deudas', deudasRequire);

app.listen(port);
