const path = require("path");

const productDetailController = {
    //Acceder a pagina detalle de producto
    getPage: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../src/views/productDetail.html"));
    },
  };
  
module.exports = productDetailController;