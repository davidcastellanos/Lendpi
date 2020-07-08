// Functions for GET HTTPMethods
const axios = require('axios');


const getAllSolicitudes = async (req) => {
  try {
    const listaSolicitudes = [];
    const res = await axios.get('https://database-lendpi.herokuapp.com/solicitudes/all');
    for (const row of res.data.listSolicitudes) {
      listaSolicitudes.push(row);
    }
    const listaCategoria = listaSolicitudes.filter((x) => x.tipo_producto == req.params.categoria);

    return { listaCategoria };
  } catch (e) {
    return (e);
  }
};

const getInvProfile = async (req) => {
  try {
    const profile = [];
    const res = await axios.get(`https://database-lendpi-users.herokuapp.com/users/investors/${req.params.id}`);
    for (const row of res.data.listInv) {
      profile.push(row);
    }
    return { profile };
  } catch (e) {
    return (e);
  }
};

const getWorProfile = async (req) => {
  try {
    const profile = [];
    const res = await axios.get(`https://database-lendpi-users.herokuapp.com/users/workers/${req.params.id}`);
    for (const row of res.data.listWork) {
      profile.push(row);
    }
    return { profile };
  } catch (e) {
    return (e);
  }
};

const getInvUid = async (req) => {
  try {
    const uuid = [];
    const res = await axios.get(`https://database-lendpi-users.herokuapp.com/users/investor/id/${req.params.email}`);
    if (typeof res.data === 'number' || typeof res.data === 'string'){
        uuid.push(res.data)
    }
    return { uuid };
  } catch (e) {
    return (e);
  }
};

const getWorUid = async (req) => {
  try {
    const uuid = [];
    const res = await axios.get(`https://database-lendpi-users.herokuapp.com/users/worker/id/${req.params.email}`);
    if (typeof res.data === 'number' || typeof res.data === 'string'){
        uuid.push(res.data)
    }
    return { uuid };
  } catch (e) {
    return (e);
  }
};

const getAllHistInvest = async (req) => {
  try {
    const res = await axios.get(`https://database-lendpi-investments.herokuapp.com/investments/all/historial_inversiones/${req.params.idInvestor}`);
    return ( res.data )
  } catch (e) {
    return (e);
  }
};

const getAllTotalInvest = async (req) => {
  try {
    const res = await axios.get(`https://database-lendpi-investments.herokuapp.com/investments/total_inversion_recibida/${req.params.idSolicitud}`);
    return ( res.data );
  } catch (e) {
    return (e);
  }
};

const getDeudaById = async (req) => {
  try {
    const res = await axios.get(`https://database-lendpi-deuda.herokuapp.com/deudas/${req.params.idWorker}`);
    return ( res.data );
  } catch (e) {
    return (e);
  }
};

module.exports = {
  getAllSolicitudes,
  getInvProfile,
  getWorProfile,
  getAllHistInvest,
  getAllTotalInvest,
  getDeudaById,
  getInvUid,
  getWorUid,
};
