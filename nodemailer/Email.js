const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const creds = require('./config');
// const dotenv = require('dotenv')

// dotenv.load({ path: '.env' })

let transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

let transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/', (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const phone = req.body.phone
  const message = req.body.message
  const content = `name: ${name} \n email: ${email} \n phone: ${phone} \n message: ${message}`

  const mail = {
    from: name,
    to: 'yowats0n@icloud.com',
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;