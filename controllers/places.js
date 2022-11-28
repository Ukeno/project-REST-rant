const router = require('express').Router()

//  First route 
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thailand.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-cat.jpg'
    }]
    res.render('places/index', { places })
})

// Second Route

router.get('/new', (req, res) => {
    res.render('places/new')
  //res.render('places/:id')  
})

module.exports = router
