import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FlightCard from './FlightCard';






class seats extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        seats:[]
    };
  }
  

  componentDidMount() {
    const dataArray =(window.location.pathname).split("/");
      const id= dataArray[2]
    axios
      .get('http://localhost:8082/api/flights/'+id)
      .then(res => {
        console.log(res.data)
        this.setState({
          seats:res.data.seats
        })
        var economy_seats_available = res.data.economy_seats_available;
        console.log(economy_seats_available);
       // console.log(this.state.flight.economy_seats_available)

      })
      .catch(err =>{
        console.log('Error from ShowFlightList');
      })
  };
 reserveseat=(target) =>{
     

 }
  

  render() {
    
    

    return (
      <div>
        {this.state.seats.map((seat)=><button>{`${seat.reserved}`}{seat.seatNo}{seat.cabin}</button>)}
      </div>
    );
  }
}

export default seats;