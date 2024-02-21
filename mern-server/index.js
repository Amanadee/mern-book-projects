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

//connect to Mongodb

const uri = 'mongodb://localhost:27017/';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your Express server once connected
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));


