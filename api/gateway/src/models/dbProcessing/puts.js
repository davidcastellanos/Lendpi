// Functions for UPDATE HTTPMethods
const axios = require('axios');
const helper = require('./helpers/helpers');
const { v4: uuidv4 } = require('uuid');

const updateDeuda = async (req) => {
  try {
    const today = new Date();
    const date = `${(today.getMonth() + 1).toString()}-${today.getDate().toString()}-${today.getFullYear().toString()}`;
    const saldoNew = await helper.getNewSaldo(req);
    const res = await axios.put(`https://database-lendpi-deuda.herokuapp.com/deudas/update/deuda/${req.params.idWorker}`, {
      pendiente: saldoNew,
      fecha: date,
    });


    return (res);
  } catch (e) {
    return (e);
  }
};

const updateSolicitud = async (req) => {
  try {
   const today = new Date();
   const date = `${(today.getMonth() + 1).toString()}-${today.getDate().toString()}-${today.getFullYear().toString()}`;
   const acumuladoNew = await helper.addAcumulado(req);
   const cantidadPedida = await helper.amountAsked(req);

   if(acumuladoNew < cantidadPedida){
     const res = await axios.put(`https://database-lendpi.herokuapp.com/solicitudes/update/solicitud/${req.body.id_worker}`, {
       total_acumulado: acumuladoNew,
     });
   }

   if(acumuladoNew >= cantidadPedida){
     // Crea la deuda
     await axios.post(`https://database-lendpi-deuda.herokuapp.com/deudas/new/deuda`,{
      id_deuda: uuidv4(),
      id_worker: req.body.id_worker,
      pendiente: acumuladoNew,
      tasas_de_interes: req.body.tasas_de_interes,
     });

     //Borra la solicitud
     const idSolicitudToDelete = await helper.deleteThisSolicitud(req);
     await axios.delete(`https://database-lendpi.herokuapp.com/solicitudes/delete/solicitud/${idSolicitudToDelete}`);

     return ('Monto Completo.')
   }



    return (acumuladoNew);
  } catch (e) {
    return (e);
  }
};

module.exports = {
  updateDeuda,
  updateSolicitud,
};
