const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/flights/:id/tickets', ticketsCtrl.create);
router.get('/flights/:id/tickets/new', ticketsCtrl.newTicket)

module.exports = router;