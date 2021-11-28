import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateFlight from './components/CreateFlight';
import ShowFlightList from './components/ShowFlightList';
import ShowFlightDetails from './components/ShowFlightDetails';
import UpdateFlightInfo from './components/UpdateFlightInfo';
import registration from './components/registration';
import search from './components/search';
import searchresults from'./components/searchresults';


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


        </div>
      </Router>
    );
  }
}

export default App;