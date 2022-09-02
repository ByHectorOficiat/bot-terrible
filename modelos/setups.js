const mongoose = require('mongoose');

const setupSchema = new mongoose.Schema({
    guildID: String,
    reaccion_roles: Array,
    sistema_tickets: {type: Object, default: {canal: "", mensaje: ""}},
    sugerencias: {type: String, default: ""},
    niveles: {type: Object, default: {canal: "", mensaje: ""}},
    bienvenidas: {type: Object, default: {canal: "", fondo: "https://i.imgur.com/DntzukO.jpeg", mensaje: "Bienvenido {ususario} a {servidor}\nDisfruta de tu estancia!"}}
})

const model = mongoose.model("Configuraciones", setupSchema);

module.exports = model;

/*
╔════════════════════════════════════════════════════════════════════════════════════╗
║    || - || Desarrollado por dewstouh#1088 y retocado por ByHectorOficiat|| - ||   ║
╚══════════════════════════════════════════════════════════════════════════════════╝
*/

