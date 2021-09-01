 const express = require ('express');
 const app = express ();

 var routerCal = require("./routes/routerCal");

    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
 
    app.set("view engine", "ejs");
 
    app.use('/pagCalculadora', routerCal);

    app.listen ("3000", function (){
         console.log ("projeto funcionando")
    })
