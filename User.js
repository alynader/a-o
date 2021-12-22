const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  firstName:{
    type:String,
    required: true
  },
  lastName:{
    type: String,
    required: true
  },
  email: {
    type: String,
	required: true
  },
  password: {
    type: String,
	required: true
  },
  passportNumber:{
    type: String,
    required: true
  },
  flights:[{flightnumber:{type:String,required:true},
              departure:{type:String,required:true},
               destination:{type:String,required:true},
               departuretime:{type:String,required:true},
              arrivaltime:{type:String,required:true},
            baggage_allowance:{type:String,required:true},
          economy_seats_available:{type:String,required:true},
         business_seats_available:{type:String,required:true},
        flightdate:{type:Date,required:true},
      TripDuration:{type:String,required:true}}] 
});

module.exports = User = mongoose.model('user', UserSchema);