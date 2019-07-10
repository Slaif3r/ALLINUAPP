const express = require("express");
const router = express.Router();

//se llama al modelo 
const USR = require('../models/model'); 

// ruta get para hacer las cosultas a BD
router.get('/',async (req, res) => {
   const USRASY = await USR.find();//find funciona como select
   res.json(USRASY);
});

// RUTAS POST para mandar datos a BD
//////

module.exports = router;