// Functions for POST HTTPMethods
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const puts = require('./puts');

const createNewSolicitud = async (req) => {
  try {
    const today = new Date();
    const date = `${(today.getMonth() + 1).toString()}-${today.getDate().toString()}-${today.getFullYear().toString()}`;
    const res = await axios.post('https://database-lendpi.herokuapp.com/solicitudes/new/solicitud', {
      id_solicitud: uuidv4(),
      created_at: date,
      marca: req.body.marca,
      modelo: req.body.modelo,
      year_model: req.body.year_model,
      tiempo_financiacion: req.body.tiempo_financiacion,
      valor_financiacion: req.body.valor_financiacion,
      id_user: req.body.id_user,
      tipo_producto: req.body.tipo_producto,
    });
    return (res);
  } catch (e) {
    return (e);
  }
};

const createNewInvestment = async (req) => {
  try {
    const today = new Date();
    const date = `${(today.getMonth() + 1).toString()}-${today.getDate().toString()}-${today.getFullYear().toString()}`;
    const res = await axios.post('https://database-lendpi-investments.herokuapp.com/investments/new/inversion', {
      id_inversion_realizada: uuidv4(),
      id_solicitud: req.body.id_solicitud,
      monto_invertido: req.body.monto_invertido,
      fecha: date,
      id_investor: req.body.id_investor,
      id_worker: req.body.id_worker,
    });
    const uptSolicitud = await puts.updateSolicitud(req);
    return (res);
  } catch (e) {
    return (e);
  }
};

const createNewInvestor = async (req) => {
  try {
    const today = new Date();
    const date = `${(today.getMonth() + 1).toString()}-${today.getDate().toString()}-${today.getFullYear().toString()}`;
    const res = await axios.post('https://database-lendpi-users.herokuapp.com/users/add/investors', {
      id_user: req.body.id_user,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
    });
    return (res);
  } catch (e) {
    return (e);
  }
};

const createNewWorker = async (req) => {
  try {
    const today = new Date();
    const date = `${(today.getMonth() + 1).toString()}-${today.getDate().toString()}-${today.getFullYear().toString()}`;
    const res = await axios.post('https://database-lendpi-users.herokuapp.com/users/add/workers', {
      id_user: req.body.id_user,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
    });
    return (res);
  } catch (e) {
    return (e);
  }
};


module.exports = {
  createNewSolicitud,
  createNewInvestment,
  createNewInvestor,
  createNewWorker,
};
