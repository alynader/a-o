import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateFlightInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightnumber: '',
      departure:'',
      destination:'',
      departuretime:'',
      arrivaltime:'',
      economy_seats_available:'',
      business_seats_available:'',
      flightdate:'',
      class:'',
      TripDuration:''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/flights/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, flight: res.data})
        this.setState({
          flightnumber: res.data.flightnumber,
          departure: res.data.departure,
          destination: res.data.destination,
          departuretime: res.data.departuretime,
          arrivaltime: res.data.arrivaltime,
          economy_seats_available: res.data.economy_seats_available,
          business_seats_available:res.data.business_seats_available,
          flightdate:res.data.flightdate,
          class:res.data.class,
          TripDuration:res.data.TripDuration
        })
      })
      .catch(err => {
        console.log("Error from UpdateFlightInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      flightnumber: this.state.flightnumber,
      departure: this.state.departure,
      destination: this.state.destination,
      departuretime: this.state.departuretime,
      arrivaltime: this.state.arrivaltime,
      economy_seats_available: this.state.economy_seats_available,
      business_seats_available: this.state.business_seats_available,
      flightdate: this.state.flightdate,
      class: this.state.class,
      TripDuration: this.state.TripDuration
    };

    axios
      .put('http://localhost:8082/api/flights/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-flight/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateFlightInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateFlightInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Flight List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Flight</h1>
              <p className="lead text-center">
                  Update Flight's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Flight</label>
              <input
                type='text'
                placeholder='Flight number'
                name='flightnumber'
                className='form-control'
                value={this.state.flightnumber}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="isbn">Departure</label>
              <input
                type='text'
                placeholder='place of departure'
                name='departure'
                className='form-control'
                value={this.state.departure}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="author">Destination</label>
              <input
                type='text'
                placeholder='Destination place'
                name='destination'
                className='form-control'
                value={this.state.destination}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Depature Time</label>
              <input
                type='text'
                placeholder='Time of departure'
                name='departuretime'
                className='form-control'
                value={this.state.departuretime}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="published_date">Arrival Time</label>
              <input
                type='text'
                placeholder='Time of arrival'
                name='arrivaltime'
                className='form-control'
                value={this.state.arrivaltime}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="publisher">Economy seats Available</label>
              <input
                type='text'
                placeholder='number of available economy seats'
                name='economy_seats_available'
                className='form-control'
                value={this.state.economy_seats_available}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="publisher">Business seats Available</label>
              <input
                type='text'
                placeholder='number of available business seats'
                name='business_seats_available'
                className='form-control'
                value={this.state.business_seats_available}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="publisher">Flight Date</label>
              <input
                type='date'
                placeholder='Date of flight'
                name='flightdate'
                className='form-control'
                value={this.state.flightdate}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="publisher">Class</label>
              <input
                type='text'
                placeholder='Class'
                name='class'
                className='form-control'
                value={this.state.class}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="publisher">Trip Duration</label>
              <input
                type='text'
                placeholder='Trip Duration'
                name='TripDuration'
                className='form-control'
                value={this.state.TripDuration}
                onChange={this.onChange}
              />
            </div>


            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Flight</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateFlightInfo;