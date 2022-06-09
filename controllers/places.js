const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Shirley\'s Sandwiches',
        city: 'Greendale',
        state: 'CO',
        cuisines: 'Deli-Style Sandwiches',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'Double R Diner',
        city: 'Twin Peaks',
        state: 'WA',
        cuisines: 'Home-Cooked Diner Food',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'Los Pollos Hermanos',
        city: 'Albuquerque',
        state: 'NM',
        cuisine: 'Chicken and Chicken Accessories',
        pic: 'http://placekitten.com/250/250'
    }]
    res.render('places/index', { places })
})

module.exports = router