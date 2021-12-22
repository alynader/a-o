import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateFlight extends Component {
  constructor() {
    super();
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

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
createseats=(economy,business) =>{
     const Array =[]
    for(var i=0; i<economy;i++){
       Array.push({seatNo:i+1,reserved:false,cabin:"economy"})
    }
    for(var i=economy; i<business+economy;i++){
      Array.push({seatNo:i+1,reserved:false,cabin:"business"})
   }
   return Array
}
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
      TripDuration: this.state.TripDuration,
      seats:this.createseats(parseInt(this.state.economy_seats_available),parseInt(this.state.business_seats_available))
    };

    axios
      .post('http://localhost:8082/api/flights', data)
      .then(res => {
        this.setState({
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
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateFlight!");
      })
  };

  render() {
    return (
      <div className="CreateFlight">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Flight List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Flight</h1>
              <p className="lead text-center">
                  Create new flight
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='flight number'
                    name='flightnumber'
                    className='form-control'
                    value={this.state.flightnumber}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='departure'
                    name='departure'
                    className='form-control'
                    value={this.state.departure}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='destination'
                    name='destination'
                    className='form-control'
                    value={this.state.destination}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='departure time'
                    name='departuretime'
                    className='form-control'
                    value={this.state.departuretime}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='arrival time'
                    name='arrivaltime'
                    className='form-control'
                    value={this.state.arrivaltime}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='economy seats available'
                    name='economy_seats_available'
                    className='form-control'
                    value={this.state.economy_seats_available}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='business seats available'
                    name='business_seats_available'
                    className='form-control'
                    value={this.state.business_seats_available}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='flight date'
                    name='flightdate'
                    className='form-control'
                    value={this.state.flightdate}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='class'
                    name='class'
                    className='form-control'
                    value={this.state.class}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Trip Duration'
                    name='TripDuration'
                    className='form-control'
                    value={this.state.TripDuration}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateFlight;