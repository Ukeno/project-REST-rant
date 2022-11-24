// PORT variables
require('dotenv').config()

// Require needed modules.
const express = require('express')

// Initialize the app object.
const app = express()

// Express Settings
// app.set('view',_dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// To import the router in places.js
app.use('/places', require('./controllers/places'))

//  Homepage route.
app.get('/', (req, res) => {
    // This gets sent to the client
    // (your web browser most likely!)
    res.render('home')
})

// 404 page route
app.get('*', (req, res) => {
    res.render('error404')
})


// Index page route
app.get('/', (req, res) => {
    res.render('index')
  })


// Pull the PORT variable from the .env file
app.listen(process.env.PORT)
