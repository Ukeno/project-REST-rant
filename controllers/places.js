const router = require('express').Router()
const db = require('../models')

// index
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

// post
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

// new
router.get('/new', (req, res) => {
  res.render('places/new')
})

//
router.get('/:id', (req, res) => {
  res.send('GET /places/:id stub')
})

// put
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

// delete
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

// edit
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

// post
router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

// delete
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router
