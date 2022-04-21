/**
 * EmailController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
 const { exec } = require('child_process');

// const { sendEmail } = require("../services/Mailer");

 module.exports = {
    create: function (req, res) {
      console.log(req.body)
      User1.create(req.body).exec( function (err, user) {
          console.log(user)
          // console.log(req.body)
        if (err) {
          // console.log(req.body)
          // console.log(err)
          // return res.json(err.status, {err: err});
          console.log(err)
        }
        if (user) {
          console.log('here')
          Mailer.sendEmail(user);  // <= Here we using
          console.log('passed')
          res.json(200, {user: user});

        }
        
      });
    }
   
    };
    
    