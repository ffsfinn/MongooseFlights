const Flight = require('../models/flight')

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {
            flights
        });
    });
}

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    let flight = new Flight(req.body);
    flight.save(function(err) {
        if(err) return res.render('flights/new');
        res.redirect('flights');
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flights) {
        res.render('flights/show', { title: 'Flight Details', flights })
    })
    
}

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

