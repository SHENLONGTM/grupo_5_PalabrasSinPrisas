//const path = require("path");

const registerController = {
    //Acceder a pagina registro
    getPage: (req,res)=>{
        //res.sendFile(path.resolve(__dirname,"../src/views/register.html"));
        res.render('users/register');
    },
  };
  
module.exports = registerController;