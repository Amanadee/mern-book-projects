const express = require('express')
const app = express()
const port = process.env.port || 5000
const mongoose = require('mongoose')
const cors = require('cors')

//middleware
app.use(cors());
app.use(express.json());

//5SrNvNhZKbuKzUWL

app.get('/', (req, res) => {
  res.send('Hello World!')
})

