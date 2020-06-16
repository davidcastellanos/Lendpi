//Routes for api access
const express = require('express');
const router = express.Router();
const db = require('../models/db');
const deudas = require('../controllers/Deudas_Logic');

//Get all deudas and interest rates
//https://database-lendpi-deuda.herokuapp.com/deudas/all/
router.get('/all', deudas.allDeudas);
router.get('/all/intereses', deudas.allInt);

//Get deuda by id
//https://database-lendpi-deuda.herokuapp.com/deudas/solicitud/##
router.get('/:id', deudas.deudaById);

//Post new deuda
//https://database-lendpi-deuda.herokuapp.com/deudas/new/
router.post('/new/deuda', deudas.deudaPost);
router.post('/new/interes', deudas.interesPost);


//Delete deuda
//https://database-lendpi-deuda.herokuapp.com/deudas/delete/XXXX/##
router.delete('/delete/deuda/:id', deudas.deudaDelete);
router.delete('/delete/interes/:id', deudas.interesDelete);


//Update deuda
//https://database-lendpi-deuda.herokuapp.com/deudas/update/new/
router.put('/update/deuda/:idWorker', deudas.deudaUpdate);


module.exports = router;
