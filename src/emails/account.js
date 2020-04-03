const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'yanghaoyuying@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, $(name). Let me know how you get along with the app.`
  })
}

const sendCancelationEmail = (email, name) => {
  console.log('going to send email')
  console.log(email)
  sgMail.send({
    to: email,
    from: 'yanghaoyuying@gmail.com',
    subject: 'you will be back!',
    text: `i am sorry for $(name)`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}
