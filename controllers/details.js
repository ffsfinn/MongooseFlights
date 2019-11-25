const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destination.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

module.exports = {
    create
}
