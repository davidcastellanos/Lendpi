//Routes for api access
//https://database-lendpi.herokuapp.com/solicitudes/
const express = require('express');
const router = express.Router();
const db = require('../models/db');
const solicitudes = require('../controllers/Solicitudes_Logic');

//Get final solicitud calculation
router.get('/calculate/:amount/:interest/:time', solicitudes.solCalculate);

//Get all solicitud, product, product-user
licitudes/all/
router.get('/all',  solicitudes.solAll);
router.get('/all/product-user', solicitudes.solProdUser);
router.get('/all/products', solicitudes.solProducts);

//Get solicitud, product, product-user by id
router.get('/solicitud/:idWorker',  solicitudes.solId);
router.get('/product-user/:id',  solicitudes.solProdUserId);

//Post new solicitud, product, product-user
router.post('/new/solicitud', solicitudes.solPost);
router.post('/new/product', solicitudes.productPost);
router.post('/new/product-user', solicitudes.productUserPost);

//Delete solicitud, product, product-user by id
router.delete('/delete/solicitud/:id', solicitudes.solicitudDelete);
router.delete('/delete/product/:id', solicitudes.productDelete);
router.delete('/delete/product-user/:id', solicitudes.productUserDelete);

//Update solicitud by id
router.put('/update/solicitud/:idWorker', solicitudes.solicitudUpdate);


module.exports = router;
