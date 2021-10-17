// agregamos las librerias "fs"(crear archivos, carpetas y leer sus contenidos) 
//"path" (trabajar con rutas de fichero) 

var fs = require('fs');
var path = require('path');

//vamos a exportar nuestras rutas

exports.administrar = async (req, res) =>
{
    
    return res.status(200).send({         //nos retorna una respuesta 
        status : 'success', //creamos un atributo para un frontend y crear un tipo de respuesta "200" hace referencia a success
        message : ' edificaciones',
    });    
   
}
