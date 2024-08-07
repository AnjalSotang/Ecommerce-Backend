const nodemailer = require("nodemailer");



const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "anjalsotang26@gmail.com",
      pass: "nzbr fipe dbka xryp",
    },
  });


  const mailOptions = {
    from: "anjalsotang26@gmail.com",
    to: "anjalsotang26@gmail.com",
    subject: "Hello from Nodemailer",
    text: "This is a test email sent using Nodemailer.",
  };

const sendMail = ()=> {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(`Error: ${error}`);
    }
    console.log(`Message Sent: ${info.response}`);
});


}

module.exports ={
  sendMail
}

