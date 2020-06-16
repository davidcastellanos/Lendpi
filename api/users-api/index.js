const express = require('express');

const app = express();
const port = process.env.PORT || 4000;
const userRequire = require('./src/routes/user_routes.js');

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use('/users', userRequire);

app.listen(port);
