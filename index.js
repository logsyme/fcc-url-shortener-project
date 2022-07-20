require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

// Connect to MongoDB in Atlas
const mongoUri = process.env['MONGO_URI']
mongoose.connect(process.env['MONGO_URI'], { useNewUrlParser: true });

// DB Schema
const URLSchema = new mongoose.Schema({
  original_url: String,
  short_url: Number
})

// Create DB Model
const URLShortener = mongoose.model('URLs', URLSchema)



// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
