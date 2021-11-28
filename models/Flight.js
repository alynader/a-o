const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
  flightnumber: {
    type: String,
    required: true
  },
  departure: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  departuretime: {
    type: String
  },
  arrivaltime: {
    type: String
  },
  economy_seats_available: {
    type: String
  },
  business_seats_available: {
    type: String,
    
  },
  flightdate:{
    type:Date
  }
});

module.exports = Flight = mongoose.model('flight', FlightSchema);