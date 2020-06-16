//Routes for api access
const express = require('express');
const router = express.Router();
const db = require('../models/db');
const invest = require('../controllers/Investments_Logic');

//Get all inversiones
//https://database-lendpi-investments.herokuapp.com/investments/all/
router.get('/all', invest.allInvest);

//Get inversion by id solicitud and id investor
//https://database-lendpi-investments.herokuapp.com/deudas/solicitud/##
// router.get('/:id', invest.deudaById);
router.get('/total_inversion_recibida/:idSolicitud', invest.allTotalInvest);
router.get('/all/historial_inversiones/:idInvestor', invest.allHistInvest);


//Post new inversion
//https://database-lendpi-investments.herokuapp.com/new/inversion
router.post('/new/inversion', invest.inversionPost);


//Delete inversion
//https://database-lendpi-investments.herokuapp.com/
// router.delete('/delete/deuda/:id', invest.deudaDelete);
// router.delete('/delete/interes/:id', invest.interesDelete);


//Update inversion
//https://database-lendpi-investments.herokuapp.com/
// router.put('/update/deuda/', invest.deudaUpdate);


module.exports = router;
