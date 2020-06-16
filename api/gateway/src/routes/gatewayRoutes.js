//Routes for api access
const express = require('express');
const router = express.Router();
const gate = require('../controllers/gatewayLogic');

//calculate
router.get('/calculate/:amount/:interest/:time', gate.solCalculate);

//Get all inversiones
//https://lendpi-gateway.herokuapp.com/api-gateway/
router.get('/all-solicitudes/:categoria', gate.allSol);
router.get('/investor-profile/:id', gate.investorInfo);
router.get('/worker-profile/:id', gate.workerInfo);


//Get inversion by id solicitud and id investor
//https://lendpi-gateway.herokuapp.com/api-gateway/
// router.get('/:id', invest.deudaById);
// router.get('/total_inversion_recibida/:idSolicitud', gate.allTotalInvest);
// router.get('/all/historial_inversiones/:idInvestor', gate.allHistInvest);


//Post new inversion
// https://lendpi-gateway.herokuapp.com/api-gateway/
router.post('/new-solicitud', gate.solicitudPost);
router.post('/new-investment', gate.investmentPost);
router.post('/new-investor', gate.investorPost);
router.post('/new-worker', gate.workerPost);

//Delete inversion
//https://lendpi-gateway.herokuapp.com/api-gateway/
// router.delete('/delete/deuda/:id', gate.deudaDelete);
// router.delete('/delete/interes/:id', gate.interesDelete);


//Update inversion
//https://lendpi-gateway.herokuapp.com/api-gateway/
router.put('/new-debt-payment/:idWorker/:amount', gate.deudaUpdate);



module.exports = router;
