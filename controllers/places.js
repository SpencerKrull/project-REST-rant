const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Shirley\'s Sandwiches',
        city: 'Greendale',
        state: 'CO',
        cuisines: 'Deli-Style Sandwiches',
        pic: '/images/shirleys.jpg'
    }, {
        name: 'Double R Diner',
        city: 'Twin Peaks',
        state: 'WA',
        cuisines: 'Home-Cooked Diner Food',
        pic: '/images/doubler.png'
    }, {
        name: 'Los Pollos Hermanos',
        city: 'Albuquerque',
        state: 'NM',
        cuisine: 'Chicken and Chicken Accessories',
        pic: '/images/pollos.jpeg'
    }]
    res.render('places/index', { places })
})

module.exports = router