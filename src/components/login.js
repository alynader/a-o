import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import TextField from '@mui/material/TextField';


class login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      username: this.state.username,
     // email: this.state.email,
      password: this.state.password
    };

    axios
      .post('http://localhost:8082/api/Users/login', data)
      .then(res => {
        
        this.setState({
          username: '',
          password: ''
        })
        console.log(res)
        localStorage.setItem("userid",res.data._id)
        this.props.history.push('/homepage');
        
      })
      .catch(err => {
        console.log("Error in Registration!");
      })
  };

  render() {
    return (
      <div className="Registration">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">LOGIN</h1>
              <p className="lead text-center">
                  Enter your information
              </p>

              <form noValidate onSubmit={this.onSubmit}>
            

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Username'
                    name='username'
                    className='form-control'
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Password'
                    name='password'
                    className='form-control'
                    value={this.state.password}
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
		<br />
      </div>
    );
  }
}

export default login;