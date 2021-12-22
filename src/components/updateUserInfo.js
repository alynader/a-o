import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class updateUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email:'',
      
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/users/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, flight: res.data})
        this.setState({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            
        })
      })
      .catch(err => {
        console.log("Error from UpdateFlightInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        
    };

    axios
      .put('http://localhost:8082/api/Users/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/userprofile/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in updateUserInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateFlightInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Flight List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit user profile</h1>
              <p className="lead text-center">
                  Update user Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Username</label>
              <input
                type='text'
                placeholder='username'
                name='username'
                className='form-control'
                value={this.state.username}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="isbn">Email</label>
              <input
                type='text'
                placeholder='example@website.org'
                name='email'
                className='form-control'
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
           
            <div className='form-group'>
            <label htmlFor="author">Password</label>
              <input
                type='text'
                placeholder='password'
                name='password'
                className='form-control'
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>
           


            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update user profile</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default updateUserInfo;