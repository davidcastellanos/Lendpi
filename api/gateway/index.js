// Entry point
const express = require('express');

const app = express();
const port = process.env.PORT || 4000;
const gatewayRequire = require('./src/routes/gatewayRoutes.js');

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use('/api-gateway', gatewayRequire);

app.listen(port);
