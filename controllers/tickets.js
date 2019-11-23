const Flight = require('../models/ticket');

function show(req, res) {
    res.render('tickets/new', { title: 'Ticket' })
}

module.exports = {
    show
}
