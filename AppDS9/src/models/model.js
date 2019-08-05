const mongoose = require("mongoose");
const {Schema} = mongoose;

const Usuarios = new Schema({
    Name: String,
    User: String,
    Passw: String,
    Address: String,
    CreatDate: Date 

});

module.exports = mongoose.model("Usr", Usuarios);