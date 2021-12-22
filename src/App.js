import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';

import CreateFlight from './components/CreateFlight';
import ShowFlightList from './components/ShowFlightList';
import ShowFlightDetails from './components/ShowFlightDetails';
import UpdateFlightInfo from './components/UpdateFlightInfo';
import registration from './components/registration';
import search from './components/search';
import searchresults from'./components/searchresults';
import login from'./components/login';
import usershowflightdetails from'./components/usershowflightdetails';
import homepage from'./components/homepage';
import seats from'./components/seats';
import userProfile from './components/userProfile';
import updateUserInfo from './components/updateUserInfo';






class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowFlightList} />
          <Route path='/create-flight' component={CreateFlight} />
          <Route path='/edit-flight/:id' component={UpdateFlightInfo} />
          <Route path='/show-flight/:id' component={ShowFlightDetails} />
          <Route path='/registration' component={registration} />
          <Route path='/search' component={search} />
          <Route path='/searchresults' component={searchresults} />
          <Route path='/login' component={login} />
          <Route path='/homepage' component={homepage} />
          <Route path='/seats' component={seats} />
          <Route path='/usershowflightdetails/:id' component={usershowflightdetails} />
          <Route path='/userprofile' component={userProfile} />
          <Route path='/updateuserinfo/:id' component={updateUserInfo} />

          







        </div>
        
      </Router>
    );
  }
}

export default App;