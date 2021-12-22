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
  baggage_allowance:{
    type:String
  },
  economy_seats_available: {
    type: String
  },
  business_seats_available: {
    type: String
  },
  flightdate:{
    type:Date
  },
  seats:[{ seatNo:{type:String, required:true},
    reserved:{type:Boolean,required:true},
    cabin:{type:String,required:true}
  }],

  
  
  TripDuration:{
    type:String
  }
  // reamaining_economy_seats:{
  //   type:String
  // },
  // reamaining_business_seats:{
  //   type:String
  // }
});

module.exports = Flight = mongoose.model('flight', FlightSchema);