/**
 * PageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
add: function(req, res) {
    return res.view('pages/add');
},

index: async function (req, res) {
    var message = req.session.success
    req.session.success = [];

    //get all products
    var products = await Product.find();

    if (message != undefined && message.length != 0) {
      return res.view('pages/products', {status: 'notEmpty', message: message, products: products});
    }
    return res.view('pages/products', {status: 'empty', products: products});
  },

showBasketPage: function (req, res) {
    var basket = req.session.basket

    if (basket != undefined) {
        var items = basket.items
    } else {
        var items = 0
    }
    return res.view('pages/basket', { items: items })
}

};

