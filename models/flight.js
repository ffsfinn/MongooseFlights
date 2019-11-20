const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    },
    arrival: {
        type: Date
    }
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']   
    },
    flightNum: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
        default: 'AUS'
    },
    destination: [destinationSchema]
    
});

module.exports = mongoose.model('Flight', flightSchema);