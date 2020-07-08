//https://database-lendpi-users.herokuapp.com/users/
const express = require('express');
const router = express.Router();
const db = require('../models/db');
const users = require('../controllers/Users_Logic');

//Get all investors or workers
router.get('/investors',  users.invAll);
router.get('/workers',  users.workersAll);

//Get investors or workers by id
router.get('/investors/:id',  users.invId);
router.get('/workers/:id',  users.worId);
router.get('/investor/id/:email',  users.invUid);
router.get('/worker/id/:email',  users.worUid);

//Post new worker or new investor
router.post('/add/investors', users.invPost);
router.post('/add/workers', users.worPost);

//Delete investor or worker by id
router.delete('/delete/investors/:id',  users.invDel);
router.delete('/delete/workers/:id',  users.worDel);

module.exports = router;
