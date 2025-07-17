import express from 'express'

const app = express()

import { CreateBlog } from './config/db.js'

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.post('/', (req, res) => {
  req.on('data', (chunk) => {
    CreateBlog(chunk)
    console.log('Request Recieved')
    res.end()
  })
})

app.listen(8000, () => {
  'Server is now live on port 8000'
})
