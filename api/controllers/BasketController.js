/**
 * BasketController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const sailsHookApianalytics = require("sails-hook-apianalytics");
// var nodemailer = require('nodemailer');


module.exports = {
  add: async function(req, res) {
    //check if there is a basket in session  
    if(req.session.basket) {
        //updates current basket if basket is in session
        //send the request object to the update helper
        var updateBasket = await sails.helpers.updateBasket(req);
        req.session.basket = updateBasket
        return res.redirect('back')
      } else {
        //create a new basket and add if not basket in session
        var basket = await sails.helpers.addToBasket(req.param('id'), 1)

        //Put it in session
        req.session.basket = basket
        return res.redirect('back')
      }
  }, 

  update: async function(req, res) {
    var updateBasket = await sails.helpers.updateBasket(req);
    return res.redirect('back')
  },

  remove: function(req, res) {
      var basket = req.session.basket

      var id = 'item'+req.param('id')

      //update total qty
      basket.totalQty = basket.totalQty - basket.items[id].qty

      //update total price
      basket.totalPrice = basket.totalPrice - basket.items[id].qty *basket.items[id].product.price


      //delete the item
      delete basket.items[id]

      return res.redirect('back')
  }, 

  // sendEmail: function (customerEmail) {
  //       let transport = nodemailer.createTransport({
  //           host: "smtp.mailtrap.io",
  //           port: 2525,
  //           auth: {
  //             user: "87f309088b6939",
  //             pass: "580e8ab7b11d1e"
  //           }
  //         });
        
  //       const message = {
  //           from: '"Example Team" <from@example.com>',
  //           to: customerEmail,
  //           subject: 'Nice Nodemailer test',
  //           text: 'Hey there, it’s our first message sent with Nodemailer ;) ',
  //           html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer'
  //       };
        
  //       transport.sendMail(message, function(err, info) {
  //           if (err) {
  //             console.log(err)
  //           } 
  //           console.log('Message sent: %s', info.messageId);

  //       });

        
  // }

};

