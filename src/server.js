import express from 'express'
import nodemailer from 'nodemailer'
import bodyParser from 'body-parser'
import { CreateBlog } from './config/db.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.resolve(__dirname, 'public')))

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com', //replace with your email provider
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.MAILPASSWORD,
  },
})

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.post('/form-submit', (req, res) => {
  req.on('data', (chunk) => {
    console.log(chunk.toString())
    res.end()
  })
})

app.post('/api/contact', async (req, res) => {
  // Collecting required information from the Request Body
  const { name, email, message } = req.body;
  try {
    // Sending the email
    // await sendContactEmail({ to: email, name, message });
    res
      .status(200)
      .json({
        message: 'Email sent successfully',
        data: { name, email, message },
        success: true
      });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({
        message: 'Unable to process request',
        data: {},
        success: false,
      })
  }
})

app.post('/', (req, res) => {
  req.on('data', (chunk) => {
    CreateBlog(chunk)
    console.log('Request Recieved')
    res.end()
  })
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(8000, () => {
  'Server is now live on port 8000'
})
