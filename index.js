const express = require ('express');
const app = express ();

var routerCal = require("./routes/rota");

   app.use(express.json());
   app.use(express.urlencoded({extended: false}));

   app.set("view engine", "ejs");

   app.use('/pagCalculadora', rota);

   app.listen ("3000", function (){
        console.log ("projeto funcionando")
   })
