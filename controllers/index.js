const Flight = require('../models/flight');

function index(req, res) {
        res.render('index', {
            title: 'Mongoose Flights'
        });
}

module.exports = {
    index
}