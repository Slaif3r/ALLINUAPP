const express = require("express");
const srvr = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/appdes9')
    .then(db => console.log("db has connecting"))
    .catch(err => console.error(err));
//Settings Sections
srvr.set('port',process.env.PORT || 3010);

// Middlewares Sections
srvr.use(morgan("dev"));
srvr.use(express.json());
//Routes Sections
srvr.use('/tasks', require('./routes/tasks'));

//Static Files
srvr.use(express.static(__dirname + '/public'));


//server is listening
srvr.listen(srvr.get('port'), ()=> {
    console.log("Server on Port", srvr.get('port'));
});