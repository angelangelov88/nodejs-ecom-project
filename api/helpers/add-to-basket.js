module.exports = {


  friendlyName: 'Add to basket',


  description: 'This helper creates a basket and add the first product to it',


  inputs: {
    productId: {
      type: 'string',
      required: true
    }, 
    
    productQty: {
      type: 'number',
      required: true
    }
  },


  fn: async function (inputs, exits) {
    // find the product
    var product = await Product.findOne({ id: inputs.productId })

    //create the basket scaffolding
    var basket = {
      items: {},
      totalQty: inputs.productQty,
      totalPrice: product.price
    }

    //push the first product in the basket
    basket.items['item'+product.id] = {
      qty: inputs.productQty,
      product: product
    }
    return exits.success(basket);
  }


};

