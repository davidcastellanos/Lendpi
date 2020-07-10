//Routes for api access
//https://database-lendpi-deuda.herokuapp.com/deudas/
const express = require('express');
const router = express.Router();
const db = require('../models/db');
const deudas = require('../controllers/Deudas_Logic');

//Get all deudas and interest rates
router.get('/all', deudas.allDeudas);
router.get('/all/intereses', deudas.allInt);

//Get deuda by id
router.get('/:id', deudas.deudaById);

//Post new deuda
router.post('/new/deuda', deudas.deudaPost);
router.post('/new/interes', deudas.interesPost);

//Delete deuda
router.delete('/delete/deuda/:id', deudas.deudaDelete);
router.delete('/delete/interes/:id', deudas.interesDelete);

//Update deuda
router.put('/update/deuda/:idWorker', deudas.deudaUpdate);


module.exports = router;
