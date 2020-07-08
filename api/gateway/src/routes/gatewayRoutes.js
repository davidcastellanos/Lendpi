//Routes for api access
//https://lendpi-gateway.herokuapp.com/api-gateway/
const express = require('express');
const router = express.Router();
const gate = require('../controllers/gatewayLogic');

//calculate
router.get('/calculate/:amount/:interest/:time', gate.solCalculate);

//Get all solicitudes
router.get('/all-solicitudes/:categoria', gate.allSol);

// Get by parameter
router.get('/investor-profile/:id', gate.investorInfo);
router.get('/worker-profile/:id', gate.workerInfo);
router.get('/investor/id/:email', gate.investorUid);
router.get('/worker/id/:email', gate.workerUid);
router.get('/total_inversion_recibida/:idSolicitud', gate.allTotalInvest);
router.get('/all/historial_inversiones/:idInvestor', gate.allHistInvest);
router.get('/deuda/:idWorker', gate.deudaById);

//Post new object
router.post('/new-solicitud', gate.solicitudPost);
router.post('/new-investment', gate.investmentPost);
router.post('/new-investor', gate.investorPost);
router.post('/new-worker', gate.workerPost);

//Delete inversion
router.delete('/delete/deuda/:idDeuda', gate.deudaDelete);

//Update inversion
router.put('/new-debt-payment/:idWorker/:amount', gate.deudaUpdate);



module.exports = router;
