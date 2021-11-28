import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


class showFlightDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: {}
    };
  }
  submit = (id) => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you want to delete this flight?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => 
          axios
      .delete('http://localhost:8082/api/flights/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowFlightDetails_deleteClick");
      })
        },
        {
          label: 'No',
          
        }
      ]
    });
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/flights/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showFlightDetails-API-response: " + res.data);
        this.setState({
          flight: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowFlightDetails");
      })
  };

  render() {

    const flight = this.state.flight;
    let FlightItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Flight Number</td>
            <td>{ flight.flightnumber }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Departure</td>
            <td>{ flight.departure }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Destination</td>
            <td>{ flight.destination }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Departure Time</td>
            <td>{ flight.departuretime }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Arrival Time</td>
            <td>{ flight.arrivaltime }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Economy Seats Available</td>
            <td>{ flight.economy_seats_available }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Business Seats Available</td>
            <td>{ flight.business_seats_available }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Flight Date</td>
            <td>{ flight.flightdate }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowFlightDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Flight List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Flight's Record</h1>
              <p className="lead text-center">
                  View Flight's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { FlightItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.submit.bind(this,flight._id)}>Delete Flight</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-flight/${flight._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Flight
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Flight</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Flight</button> */}

        </div>
      </div>
    );
  }
}

export default showFlightDetails;