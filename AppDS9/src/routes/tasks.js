const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Las tareas de API van aqui,")
});

module.exports = router;