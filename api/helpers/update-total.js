module.exports = {


  friendlyName: 'Update total',


  description: 'This helper updates the total amount based on the selected items and  adds the VAT',


  inputs: {
    totalPrice: {
      type: 'number',
      required: true
    }, 
    
    vat: {
      type: 'number',
      required: true
    }

  },


  fn: async function (inputs, exits) {
    // TODO
    var total = inputs.totalPrice 
    var totalExcVat = 0
    var vat = 0.2

    totalExcVat = total / (0.2)

    subtotal = total
    vat =  ((total / 1.2) * 0.2)
    totalExcVat = total / 1.2
    
console.log('totalExcVat')

    return exits.success(basket);
  }


};

