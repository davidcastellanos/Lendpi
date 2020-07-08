// Functions for DELETE HTTPMethods
const axios = require('axios');


const deleteDeuda = async (req) => {
  try {
    const res = await axios.delete(`https://database-lendpi-deuda.herokuapp.com/deudas/delete/${req.params.idDeuda}`);
    return (`${req.url} Deleted.`);
  } catch (e) {
    return (e);
  }
};



module.exports = {
  deleteDeuda,
};
