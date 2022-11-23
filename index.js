// PORT variables
require('dotenv').config()

// Require needed modules.
const express = require('express')

// Initialize the app object.
const app = express()

// route that defines the view engine (JSX in this case)
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// To import the router in places.js
app.use('/places', require('./controllers/places'))

//  Create a homepage route.
app.get('/', (req, res) => {
    // This gets sent to the client
    // (your web browser most likely!)
    res.render('home')
})

// 404 page
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

// Pull the PORT variable from the .env file
app.listen(process.env.PORT)
