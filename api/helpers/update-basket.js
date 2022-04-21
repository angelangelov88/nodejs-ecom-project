module.exports = {


  friendlyName: 'Update basket',


  description: 'This helper updates a basket already in session',


  inputs: {
    req: {
      type: 'ref',
      required: true
    }
  },

  fn: async function (inputs, exits) {
    // check if there is a qty in the request parameters
    //if there is, use it, if there isn't, default to 1
    if(inputs.req.param('qty') != undefined && inputs.req.param('qty') >= 1) {
      //set the quantity to the request param qty
      var qty = inputs.req.param('qty')
    } else if (inputs.req.body != undefined) {
      var qty = parseInt(inputs.req.body.quantity)
    } else {
      //default to 1
      var qty = 1
    }

    //check if the request comes as post or as a param
    if (inputs.req.param('id')) {
      //find the product
      var product = await Product.findOne({ id: inputs.req.param('id')})
    }

    if (inputs.req.body != undefined) {
      //find the product
      var product = await Product.findOne({ id: inputs.req.body.productId})
    }

    //get the current basket
    var currentBasket = inputs.req.session.basket

    //check if the product is in the current basket
    if ('item'+product.id in currentBasket.items) {
      var productid = 'item'+product.id

      //get previous quantity and prices
      oldQty = currentBasket.items[productid].qty
      oldPrice = currentBasket.items[productid].qty * currentBasket.items[productid].product.price

      //set the new basket
      var updatedBasket = currentBasket

      //update the quantity
      updatedBasket.items[productid].qty = qty

      //reset total price and qty
      updatedBasket.totalQty = updatedBasket.totalQty - oldQty
      updatedBasket.totalPrice = updatedBasket.totalPrice - oldPrice

      //update the total price and quantity
      updatedBasket.totalQty = +updatedBasket.totalQty + qty
      updatedBasket.totalPrice = updatedBasket.totalPrice + updatedBasket.items[productid].product.price * qty
    } else {
      //push the new item to the current basket
      currentBasket.items['item' + inputs.req.param('id')] = {
        qty: qty,
        product: product
      }

      //update the total quantity and total price
      currentBasket.totalQty = currentBasket.totalQty + qty
      currentBasket.totalPrice = currentBasket.totalPrice + product.price * qty

      var updatedBasket = currentBasket
    }

    //All done. Return the updated basket
    return exits.success(updatedBasket);
  }


};

