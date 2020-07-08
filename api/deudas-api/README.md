# Debts API

Api related to handling Debts in Lendpi.

## Endpoints:
Base url: https://database-lendpi-deuda.herokuapp.com/deudas/
 - ## Get:
	 - List all debts: **/all**
	 - List interest rates: **/all/intereses**
	 - List single worker debt by id: **/:id**
 - ## Post:
	 - Post new debt: **/new/deuda**
	##### json body: 
          { id_deuda: ,
          id_worker: ,
          pendiente: ,
          tasas_de_interes: ,
         }

	- Post new interest: **/new/deuda**
	##### json body: 
          { id_tasa: ,
          porcentaje: ,
          }

- ## Update:
	 - Update debt remainder **/update/deuda/:idWorker**
	 ##### json body: 
          { pendiente: ,}

 - ## Delete:
	 - Delete debt for worker with worker id: **/delete/deuda/:id**
	 - Delete interest by id: **/delete/interes/:id**

