const express = require('express');
const router = express.Router();

// Load Flight model
const Flight = require('../../models/Flight');

// @route GET api/flights/test
// @description tests flights route
// @access Public
router.get('/test', (req, res) => res.send('flight route testing!'));

// @route GET api/flights
// @description Get all flights
// @access Public

router.get('/', (req, res) => {
  Flight.find()
    .then(flights => res.json(flights))
    .catch(err => res.status(404).json({ noflightsfound: 'No Flights found' }));
});

// @route GET api/flights/:id
// @description Get single flight by id
// @access Public
router.get('/:id', (req, res) => {
  Flight.findById(req.params.id)
    .then(flight => res.json(flight))
    .catch(err => res.status(404).json({ noflightfound: 'No Flight found' }));
});

// @route GET api/flights
// @description add/save flight
// @access Public
router.post('/', (req, res) => {
  Flight.create(req.body)
    .then(flight => res.json({ msg: 'Flight added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this flight' }));
});

// @route GET api/flights/:id
// @description Update flight
// @access Public
router.put('/:id', (req, res) => {
  Flight.findByIdAndUpdate(req.params.id, req.body)
    .then(flight => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

//ADD FLIGHT TO USER



router.put('/add/:flightid/user/:userid', (req, res) => {
  Flight.findById(req.params.flightid)
    .then(flight => {
      var id = req.params.userid
      User.findByIdAndUpdate({_id: id}, {$push: {flights: flight}})
        .then(user =>{
            user.flights.push(flight)
            console.log(user)
            res.json({ msg: 'Flight added successfully' })
        })
    })
    .catch(err => res.status(404).json({ noflightfound: 'No Flight found' }));

});

// @route GET api/flights/:id
// @description Delete flight by id
// @access Public
router.delete('/:id', (req, res) => {
  Flight.findByIdAndRemove(req.params.id, req.body)
    .then(flight => res.json({ mgs: 'Flight entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a flight' }));
});
router.post('/search', (req, res) => {
	console.log(req.body)
  Flight.find(req.body)
    .then(flights => res.json(flights))
    .catch(err => res.status(404).json({ noflightsfound: 'No Flights found' }));
});

    


module.exports = router;