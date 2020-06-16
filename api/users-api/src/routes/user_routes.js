const express = require('express');
const router = express.Router();
const db = require('../models/db');
const users = require('../controllers/Users_Logic');

//Get all investors or workers
//https://database-lendpi-users.herokuapp.com/users/(investors/workers)
router.get('/investors',  users.invAll);
router.get('/workers',  users.workersAll);

//Get investors or workers by id
//https://database-lendpi-users.herokuapp.com/users/investors/##
router.get('/investors/:id',  users.invId);
router.get('/workers/:id',  users.worId);

//Post new worker or new investor
//https://database-lendpi-users.herokuapp.com/users/add/investors
router.post('/add/investors', users.invPost);
router.post('/add/workers', users.worPost);

//Delete investor or worker by id
//https://database-lendpi-users.herokuapp.com/users/delete/(investors\workers)/##
router.delete('/delete/investors/:id',  users.invDel);
router.delete('/delete/workers/:id',  users.worDel);

module.exports = router;
