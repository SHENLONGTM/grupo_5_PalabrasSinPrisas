const productsController = {
    //crear un producto
    create: (req, res) =>{
        res.render("products/product-create-form")
    } 
}

module.exports = productsController;