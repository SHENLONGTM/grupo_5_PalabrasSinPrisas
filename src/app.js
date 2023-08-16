// Requerir los paquetes
const express = require('express');
const app = express();
const path = require("path");

//Poner a escuchar al servidor
app.listen(3000,()=>{
    console.log("Servidor corriendo en http://localhost:3000/");
})

//Motor de plantillas EJS
app.set("view engine", "ejs");

// Configuramos carpeta de las vistas
app.set('views', path.resolve(__dirname, "views"));

//Recursos estaticos
app.use(express.static('public'));


/* Manejo de rutas */
//Raiz
const rutasMain = require('../routes/main');
app.use('/',rutasMain);

//Detalle de producto
const rutasProductDetail = require('../routes/productDetail');
app.use('/detalle-de-producto',rutasProductDetail);

//Carrito de compras
const rutasProductCart = require('../routes/productCart');
app.use('/carrito-de-compras',rutasProductCart);

//Registro
const rutasRegister = require('../routes/register');
app.use('/registro',rutasRegister);

//Login
const rutasLogin = require('../routes/login');
app.use('/login',rutasLogin);

