// Requerir los paquetes
const express = require('express');
const app = express();

const path = require('path');

//Poner a escuchar al servidor
app.listen(3000,()=>{
    console.log("Servidor corriendo");
})

app.use(express.static('public'));

/* Manejo de rutas */
//Raiz
app.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/index.html"))
})
app.get("/home", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/index.html"))
})

//Detalle de producto
app.get("/detalle-de-producto", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/productDetail.html"))
})

//Carrito de compras
app.get("/carrito-de-compras", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/productCart.html"))
})
//Registro
app.get("/registro", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})
//Login
app.get("/login", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
})