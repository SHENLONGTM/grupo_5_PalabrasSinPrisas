const fs = require("fs");
const path = require("path");

//Asignamos el archivo JSON a una constante
const productFilePath = path.join(__dirname, "../src/data/products.json");

const mainController = {
    //Acceder a pagina de inicio
    getPage: (req, res) => {
      //res.sendFile(path.join(__dirname,'../src/views/index.html'));

      //Convertimos el JSON a un formato que ejs pueda leer
      const products = JSON.parse(fs.readFileSync(productFilePath, "utf-8"));
      res.render('index', {products: products});
    },
  };
  
module.exports = mainController;