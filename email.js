import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL, // Your Gmail address
        pass: process.env.PASSWORD // Your Gmail password or App Password
    }
});

// Set up email data
let mailOptions = {
    from: process.env.EMAIL, // Sender address
    to: 'sebastianflorin603@gmail.com', // List of receivers
    subject: 'Hello from Node.js', // Subject line
    text: 'Hello Sebastian, this is a test email sent from a Node.js application.', // Plain text body
    html: '<b>Hello Sebastian</b>,<br><br>This is a test email sent from a Node.js application.' // HTML body
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});

