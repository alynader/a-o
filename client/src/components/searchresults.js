// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router";

// const SearchResults = () => {
//   const location = useLocation();
//   console.log(location.search);
//   const url = "http://localhost:8082/api/flights/search" + location.search;
//   console.log(url);
//   const [flights, setFlights] = useState([]);

//   useEffect(() => {
//     axios.get(url).then((result) => {
//       setFlights(result.data);
//     });
//   }, []);

//   return <div><ul>
//   {flights.map((flight) => (
//     <li key={flight._id}>
//       <div className="row">
//         <p className="left-txt">
//           {" "}
//           <b>Flight Number: </b> {flight.flight_number}{" "}
//         </p>
//         <p className="left-txt">
//           {" "}
//           <b>Flight Date: </b> {flight.flight_date}{" "}
//         </p>
//         <p className="left-txt">
//           {" "}
//           <b>From: </b> {flight.from}{" "}
//         </p>
//         <p className="left-txt">
//           {" "}
//           <b>To: </b> {flight.to}{" "}
//         </p>
//         <p className="left-txt">
//           {" "}
//           <b>Departure Time: </b> {flight.departure_time}{" "}
//         </p>
//         <p className="left-txt">
//           {" "}
//           <b>Arrival Time: </b> {flight.arrival_time}{" "}
//         </p>
//         <p className="left-txt">
//           {" "}
//           <b>Economy: </b> {flight.economy_seats_available}{" "}
//         </p>
//         <p className="left-txt">
//           {" "}
//           <b>Business: </b> {flight.business_seats_available}
//         </p>
//       </div>
//     </li>
//   ))}
// </ul></div>;
// };

// export default SearchResults;



 import React, { Component } from 'react';
 import '../App.css';
 import axios from 'axios';
 import { Link } from 'react-router-dom';
 import FlightCard from './FlightCard';

 class searchresults extends Component {
   constructor(props) {
     super(props);
     this.state = {
       flights: []
     };
   }

   componentDidMount() {
     const dataArray =(window.location.pathname).split("/");
     const data = {
       flightnumber:dataArray[2],
       departure:dataArray[3],
       destination: dataArray[4],
       departuretime: dataArray[5],
       arrivaltime: dataArray[6],
       economy_seats_available:dataArray[7],
       business_seats_available:dataArray[8],
       flightdate:dataArray[9]
     };

     var neededData ={};
     for(var i in data){
       if(data[i]!==''){
         neededData[i]=data[i];
       }
     }
       
     axios
      .post('http://localhost:8082/api/flights/search', neededData)
      .then(res => {
        this.setState({
          flights: res.data
        })
		this.props.history.push('/searchresults/');
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

         </div>

           <div className="list">
                 {flightList}
           </div>
         </div>
       </div>
   );
   }
 }

export default searchresults;