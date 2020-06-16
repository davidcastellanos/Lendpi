// Entry point
const express = require('express');

const app = express();
const port = process.env.PORT || 4000;
const investmentsRequire = require('./src/routes/investmentsRoutes.js');

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use('/investments', investmentsRequire);

app.listen(port);
