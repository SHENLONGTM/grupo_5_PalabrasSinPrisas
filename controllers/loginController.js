const path = require("path");

const registroController = {
    //Acceder a pagina de login
    getPage: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../src/views/login.html"));
    },
  };
  
module.exports = registroController;