const functions = require('firebase-functions');
const nodemailer = require('nodemailer')
const admin = require('firebase-admin');
const config = functions.config();
admin.initializeApp();

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: config.user.email,
        pass: config.user.password
    }
});

let mailOptions = {
    from: 'MM Development', 
    to: 'ermm10051995@gmail.com',
    subject: 'Testing NodeMailer',
    text: 'Test Successful'
}


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
transporter.sendMail(mailOptions, error => {
    if(error) response.send(error);
    else response.send("Hello from Firebase! Message sent correctly");
})
});
