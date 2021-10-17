const express  = require('express'); //cargar framework de nodejs
const routes = require('./routes'); //cargamos las rutas
const patch = require('path'); //cargar ruta de archivos
const bodyParser = require('body-parser'); //para leer los formularios a futuro


const app = express(); //crear una app de express


//Activamos bodyparser para leer datos de formularios, esto es un middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// mandar peticiones http mediante las cabeceras y permite tener acceso a nuestras rutas


app.use((req, res, next) => {   //Añadimos ls rutas
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Resquested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();

});
//Cargamos las rutas
app.use('/Edificios', routes());  //sufijo que se le va a añadir a nuestras rutas


app.listen(3000);
// las rutas comenzaran asi
//http://localhost:3000/edificios/prueba

