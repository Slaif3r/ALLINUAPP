const express = require("express");
const router = express.Router();

//se llama al modelo 
const USR = require('../models/model'); 

// ruta get para hacer las cosultas a BD
router.get('/',async (req, res) => {
   const USRASY = await USR.find();//find funciona como select
   res.json(USRASY);
});
router.post('/', async (req, res)=> {
   const addusr = new USR(req.body);
   //console.log(addusr);
   await addusr.save();
   res.json({status:"Task Saved"});
});

// RUTAS POST para mandar datos a BD
//////

module.exports = router;