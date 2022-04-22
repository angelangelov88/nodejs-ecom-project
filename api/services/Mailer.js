
module.exports.sendEmail =
   function (email) {
     console.log('hello there')
    sails.hooks.email.send(
      "testEmail",
      {
        recipientName: email,
        senderName: "Angel"
      },
      {
        to: email,
        subject: "Your order"
      },
      function(err) {console.log(err || "It worked!");}
    ) 
    console.log('hello 2')

  
};


