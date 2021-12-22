import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios'

const UserFlightCard = (props) => {
    const  flight  = props.flight;

//    const addFlight =  e =>{
        
//     axios
//     .put('http://localhost:8082/api/flights/add/'+flight._id +"/user/"+ localStorage.getItem("userid"))
//     .then(res => {
//       alert("FLight added successfully")
//     })
//     .catch(err => {
//       console.log("Error in Addding!");
//     })
//     };

    return(
        <div className="card-container">
            <img src="https://icon-library.com/images/plane-png-icon/plane-png-icon-12.jpg"width = "150px"  alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/usershowflightdetails/${flight._id}`}>
                        { flight.flightnumber }
                    </Link>
                </h2>
                <h3>{flight.destination}</h3>
                <p>{flight.departure}</p>
            
            </div>
        </div>
    )
};

export default UserFlightCard;