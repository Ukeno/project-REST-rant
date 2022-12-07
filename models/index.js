// using the value of the MONGO_URI environment variable
require('dotenv').config()
// connect to Mongoose
const mongoose = require('mongoose')
// properties are optional, but will remove some warning messages from your terminal
// learn more https://arunrajeevan.medium.com/understanding-mongoose-connection-options-2b6e73d96de1
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports.Place = require('./places')