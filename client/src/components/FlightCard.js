import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const FlightCard = (props) => {
    const  flight  = props.flight;

    return(
        <div className="card-container">
            <img src="https://icon-library.com/images/plane-png-icon/plane-png-icon-12.jpg"width = "150px"  alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-flight/${flight._id}`}>
                        { flight.flightnumber }
                    </Link>
                </h2>
                <h3>{flight.destination}</h3>
                <p>{flight.departure}</p>
            </div>
        </div>
    )
};

export default FlightCard;