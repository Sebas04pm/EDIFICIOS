
const express  = require('express'); //cargar framework de nodejs
const router = express.Router(); //crear nucleo router

//importar controladores
const edf_controler = require
('../controllers/edificio.controller');


module.exports = function() //crear un modulo .exports , se encargara de exportar nuestras rutas
{
    //declarar una ruta
    router.get('/prueba', edf_controler.administrar);      //metodo de optener datos

    return router; // router es nuestras constante y hace referencia a las rutas de express

}