import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
//import axios from 'axios';
//import { useHistory } from "react-router-dom";
//import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
//import {TextField} from '@material-ui/core';
import { useHistory } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";


// const Search = () => {

//     const history=useHistory()

//     const [flight,setFlight]=useState({})
    
//     const handleChange= (e)=>{
      
//      setFlight(
//          {...flight,[e.target.name]:e.target.value}
//      )
     

//      }
    
//     const onSubmit=(e)=> {
//         e.preventDefault();
//         let searchUrl="/search/results?"
//         const noOfKeys=Object.keys(flight).length
//         Object.entries(flight).map((entry, i) => {
//             let [key, value] = entry;
//             let last = i + 1 === noOfKeys ? "" : "&";
//             return (searchUrl += key + "=" + value + last);
//           });
      
       
//         history.push(searchUrl)
        
       // window.location.href="/searchresults/" + searchUrl;
    
      //}


 class search extends Component {
    //history=useHistory();

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
       flightdate:''
     };
   }
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
       flightdate: this.state.flightdate
  };
  axios
  .get('http://localhost:8082/api/flights/',data)
  .then(res=> {
  this.props.history.push('/searchresults/'+ data.flightnumber + '/' + data.departure + '/'+ data.destination + '/' + data.departuretime + '/' + data.arrivaltime + '/' + data.economy_seats_available + '/'+ data.business_seats_available +'/' + data.flightdate)
  })
  .catch(err=>{
    console.log("error");
  })
  //  window.location.href="/searchresults/" + data;
   
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
              <h1 className="display-4 text-center">Search for a flight</h1>
              <p className="lead text-center">
                  
              </p>

              <form  onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='flight number'
                    name='flightnumber'
                    className='form-control'
                   // value={this.state.flightnumber}
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
                    //value={this.state.departure}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='destination'
                    name='destination'
                    className='form-control'
                   // value={this.state.destination}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='departure time'
                    name='departuretime'
                    className='form-control'
                   // value={this.state.departuretime}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='arrival time'
                    name='arrivaltime'
                    className='form-control'
                    //value={this.state.arrivaltime}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='economy seats available'
                    name='economy_seats_available'
                    className='form-control'
                   // value={this.state.economy_seats_available}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='business seats available'
                    name='business_seats_available'
                    className='form-control'
                   // value={this.state.business_seats_available}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='flight date'
                    name='flightdate'
                    className='form-control'
                    //value={this.state.flightdate}
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

export default search;