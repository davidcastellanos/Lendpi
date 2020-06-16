//Routes for api access
const express = require('express');
const router = express.Router();
const db = require('../models/db');
const solicitudes = require('../controllers/Solicitudes_Logic');

//Get final solicitud calculation
//https://database-lendpi.herokuapp.com/solicitudes/all/
router.get('/calculate/:amount/:interest/:time', solicitudes.solCalculate);

//Get all solicitud, product, product-user
//https://database-lendpi.herokuapp.com/solicitudes/all/
router.get('/all',  solicitudes.solAll);
router.get('/all/product-user', solicitudes.solProdUser);
router.get('/all/products', solicitudes.solProducts);

//Get solicitud, product, product-user by id
//https://database-lendpi.herokuapp.com/solicitudes/solicitud/##
router.get('/solicitud/:id',  solicitudes.solId);
router.get('/product-user/:id',  solicitudes.solProdUserId);

//Post new solicitud, product, product-user
//https://database-lendpi.herokuapp.com/solicitudes/new/
router.post('/new/solicitud', solicitudes.solPost);
router.post('/new/product', solicitudes.productPost);
router.post('/new/product-user', solicitudes.productUserPost);

//Delete solicitud, product, product-user by id
//https://database-lendpi.herokuapp.com/solicitudes/delete/XXXX/##
router.delete('/delete/solicitud/:id', solicitudes.solicitudDelete);
router.delete('/delete/product/:id', solicitudes.productDelete);
router.delete('/delete/product-user/:id', solicitudes.productUserDelete);

//Update solicitud by id
router.put('/update/solicitud/:idWorker', solicitudes.solicitudUpdate);


module.exports = router;
