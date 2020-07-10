# Users API

Api related to handling Users in Lendpi.

## Endpoints:
Base url: https://database-lendpi-users.herokuapp.com/users/
 - ## Get:
	 - List all investors: **/investors**
	 - List all workers: **/workers**
	 - List investor info by id: **/investors/:id**
	 - List worker info by id: **/workers/:id**
	 - List specific investor uuid: **/investor/id/:email**
	 - List specific worker uuid: **/worker/id/:email**

 - ## Post:
	 - Post new investor: **/add/investors**
	##### json body: 
          { id_user: ,
          first_name: ,
          last_name: ,
          token: ,
          email: ,
          photo: , }
       
	 - Post all worker: **/add/worker**
	##### json body: 
         { id_user: ,
          first_name: ,
          last_name: ,
          token: ,
          email: ,
          photo: , }
	

 - ## Delete:
	 - List all investors: **/delete/investors/:id**
	 - List all workers: **/delete/workers/:id**


