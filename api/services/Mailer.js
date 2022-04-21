
module.exports.sendmail =
   function (obj) {
    sails.hooks.email.send(
      "testEmail",
      {
        recipientName: "Joe",
        senderName: "Sue"
      // Name: obj.name
      },
      {
        to: "angel.levski@gmail.com",
        // to: obj.email,
        subject: "Hi there"
      },
      function(err) {console.log(err || "It worked!");}
    ) 
    
  
};


