const Flight = require('../models/ticket');
const Ticket = require('../models/ticket');

function newTicket(req, res){
    res.render('tickets/new', {flightId: req.params.id})
};

function create(req, res){
    let newTicket = {
        flight: req.params.id,
        seat: req.body.seat,
        price: req.body.price
    }
    Ticket.create(newTicket, function(err, ticket){
        if(err) res.send(err)
        res.redirect(`/flights/${req.params.id}`);
    })
}

module.exports = {
    newTicket,
    create
}