
// var nodemailer = require('nodemailer');

// const sendEmail = (customerEmail) => {
//   let transport = nodemailer.createTransport({
//              host: "smtp.mailtrap.io",
//              port: 2525,
//              auth: {
//                user: "87f309088b6939",
//                pass: "580e8ab7b11d1e"
//              }
//            });


//    const message = {
//             from: '"Example Team" <from@example.com>',
//             to: customerEmail,
//             subject: 'Nice Nodemailer test',
//             text: 'Hey there, it’s our first message sent with Nodemailer ;) ',
//             html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer'
//         };
        

//         transport.sendMail(message, function(err, info) {
//             if (err) {
//               console.log(err)
//             } 
//             console.log('Message sent: %s', info.messageId);

//         });
// }


