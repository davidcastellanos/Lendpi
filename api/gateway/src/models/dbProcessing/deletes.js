// Functions for DELETE HTTPMethods

// const deleteDeuda = async (req) => {
//   try {
//     const idDeuda = req.params.id;
//     const text = 'DELETE FROM deuda WHERE id_deuda=$1';
//     const values = [idDeuda];
//     await db.query(text, values, (err) => {
//       if (err) throw err;
//     });
//     return (`${req.url}Deleted.`);
//   } catch (e) {
//     return (e);
//   }
// };
//
// const deleteInteres = async (req) => {
//   try {
//     const idTasa = req.params.id;
//     const text = 'DELETE FROM tasas_de_interes WHERE id_tasa=$1';
//     const values = [idTasa];
//     await db.query(text, values, (err) => {
//       if (err) throw err;
//     });
//     return (`${req.url}Deleted.`);
//   } catch (e) {
//     return (e);
//   }
// };
//
// module.exports = {
//   deleteDeuda,
//   deleteInteres,
// };
