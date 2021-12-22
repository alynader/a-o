import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


class userProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:'',
      flights: []
    };
  }
  
  componentDidMount() {
    

    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/Users/'+localStorage.getItem('userid'))
      .then(res => {
        console.log(res)
        // console.log("Print-showFlightDetails-API-response: " + res.data);
        this.setState({
          user: res.data,
          flights: res.data.flights
        })
        console.log(this.state.flights)
      })
      .catch(err => {
        console.log("Error from userProfile");
      })
  };

  render() {
const user= this.state.user;
    const flight = this.state.flight;
    const flights = this.state.flights;
    console.log(flights)
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
            <td>Username </td>
            <td>{ user.username }</td>
          </tr>
          <tr>
          <th scope="row">1</th>
            <td>Fisrt Name </td>
            <td>{ user.firstName }</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Last Name </td>
            <td>{ user.lastName }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Email</td>
            <td>{ user.email }</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Passport Number </td>
            <td>{ user.passportNumber }</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Flights </td>
            <td><div><pre ><span style={{color:'white'}}>{ JSON.stringify(flights, null, 2) }</span></pre></div></td>
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
              <h1 className="display-4 text-center">User Profile</h1>
              <p className="lead text-center">
                  View user Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { FlightItem }
          </div>


            <div className="col-md-6">
              <Link to={`/updateuserinfo/${user._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Profile
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Flight</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Flight</button> */}

        </div>
    );
  }
}

export default userProfile;