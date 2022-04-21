/**
 * PageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 module.exports = {
  
    create: async function(req, res) {
        var productName = req.body.name
        var price = req.body.price
        var image = req.body.image
        var desc = req.body.description

        await Product.create({
            name: productName,
            price: price,
            image: image,
            description: desc
        })

//put a success message
        req.session.success = 'Product successfully registered.'

        res.redirect('/products');

    },

    
};
    
    