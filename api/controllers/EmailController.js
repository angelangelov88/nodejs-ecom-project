/**
 * EmailController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
 const { exec } = require('child_process');

const { sendEmail } = require("../services/Mailer");

 module.exports = {
    create: function (req, res) {

      const emailNew = req.body.emailAddress;
      let regex = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      let validEmail = emailNew.match(regex)

      // console.log(emailNew)
      // console.log(validEmail)

      
      if (validEmail) {
        console.log('here')
        Mailer.sendEmail(emailNew);  // <= Here we using
        console.log('passed')
        // res.json(200, 'Email sent')
        // return res.send('<h3>Email has been sent!</h3><br><a href="/products">Back</a>')
        return res.render('../views/pages/email-sent-success.ejs')
      } else {
        console.log('bad email')

        
        // res.send('<p style="color: red">Wrong email</p>')
        return res.redirect('/basket')
        
        
      }
      
          // console.log(User1.emailAddress);
          // console.log(User1)
          // console.log(user1);
          console.log('1');        
      
    }
   
    };
    
    