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

module.exports = {
  getAllSolicitudes,
  getInvProfile,
  getWorProfile,
};
