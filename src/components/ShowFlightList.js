import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FlightCard from './FlightCard';



class ShowFlightList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      flights: []
    };
  }
  

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/flights')
      .then(res => {
        console.log(res.data)
        this.setState({
          flights: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowFlightList');
      })
  };


  render() {
    const flights = this.state.flights;
    console.log("PrintFlight: " + flights);
    let flightList;

    if(!flights) {
      flightList = "there is no flight record!";
    } else {
      flightList = flights.map((flight, k) =>
        <FlightCard flight={flight} key={k} />
      );
    }

    return (
      <div className="ShowFlightList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Flights List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-flight" className="btn btn-outline-warning float-right">
                + Add New Flight
              </Link>
              <br />
              <br />
              <hr />
            </div>
            <div className="col-md-11">
              <Link to="/search" className="btn btn-outline-warning float-right">
                + Search for a flight
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>

          <div className="list">
                {flightList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowFlightList;