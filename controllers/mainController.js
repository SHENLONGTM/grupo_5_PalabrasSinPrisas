//const path = require("path");

const mainController = {
    //Acceder a pagina de inicio
    getPage: (req, res) => {
      //res.sendFile(path.join(__dirname,'../src/views/index.html'));
      res.render('index');
    },
  };
  
module.exports = mainController;