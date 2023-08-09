const path = require("path");

const productCartController = {
    //Acceder a pagina de carrito de compras
    getPage: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../src/views/productCart.html"));
    },
  };
  
module.exports = productCartController;