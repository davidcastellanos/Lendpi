// Entry point
const express = require('express');

const app = express();
const port = process.env.PORT || 4000;
const solicitudesRequire = require('./src/routes/solicitudesRoutes.js');

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use('/solicitudes', solicitudesRequire);

app.listen(port);
