import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Autocomplete from '@mui/material/Autocomplete'
//import emptyField from '@mui/material/emptyField'
import Chip from '@mui/material/Chip'
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import  IconButton  from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';
import  Typography  from '@mui/material/Typography';




const airports = require('../airports.json');
var date = new Date();
var today= date.getDate();

class homepage extends Component {
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
       flightdate:'',
       class:'',
      //  reamaining_economy_seats:'',
      //  reamaining_business_seats:''
      };
      this.onChangeValue = this.onChangeValue.bind(this);
    }
    onChangeValue(event) {
      this.setState({ class: event.target.value });
    }
  
    onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
    onChangeDeparture = e => {
      this.setState({ departure: e.target.firstChild.data });
    };

    onChangeArrival = e => {
      this.setState({ destination: e.target.firstChild.data });
    };

    onChangeArrivalDate = e => {
      this.setState({ arrivaltime: e.target.value });
    };

    onChangeFlightDate = e => {
      this.setState({ flightdate: e.target.value });
    };
  
    onSubmit = e => {
      e.preventDefault();
  
      const data = {
       departure: this.state.departure,
       destination: this.state.destination,
       flightdate: this.state.flightdate,
       class: this.state.class
      };
      // const data1={
      //   reamaining_economy_seats= this.state.economy_seats_available,
      //   business_seats_available=this.state.business_seats_available
      // }
  
      axios
       .get('http://localhost:8082/api/flights/',data)
     .then(res=> {
     this.props.history.push('/searchresults/' + data.departure + '/'+ data.destination + '/' + data.flightdate+ '/' + data.class)
     })
     .catch(err=>{
       console.log("error");
     })
    //  axios
    //    .get('http://localhost:8082/api/flights/',data1)
    //  .then(res=> {
    //  this.props.history.push('/seats/' + data1.reamaining_economy_seats + '/' + data1.business_seats_available)
    //  })
    //  .catch(err=>{
    //    console.log("error");
    //  })
   
  };
  
    render() {
        return (
          <div className="homepage">
            <div className="container-fluid">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Book a flight</h1>
                  <p className="lead text-center">
                      Search for flights and book online.
                  </p>
                  <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome
            </Typography>
            <Link to="/userprofile">
            <Button color="inherit" onClick={() => {
                 // handleClick();
              }}>profile</Button>
              </Link>
          </Toolbar>
        </AppBar>
      </Box>
    
                  <form noValidate onSubmit={this.onSubmit}>
                  <React.Fragment>
                 <CssBaseline />
                <Container maxWidth="sm">
             <Box sx={{ bgcolor: '#000000', height: '30vh',width:'40vw'}} />
            </Container>
            </React.Fragment>
           
            <Link to="/login">
            <Stack direction="row" spacing={2}>
              <Button variant="contained">Login
              </Button>
    </Stack>
    </Link>
            
            <div className="homepageRow">
            <Autocomplete
                style={{
                    width:"330px",
                    margin:"auto",
                    backgroundColor:"white"
                }}
                id="size-large-filled"
                size="large"
                options={airports}
                getOptionLabel={(option)=>option}
                //onChange={(ev,value)=>{this.state.departure=value;
                //emptyField='false';
                //this.forceUpdate()}}
                onChange={(event, value) => this.setState({ departure: value }) }
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                    <Chip
                    variant="outlined"
                    label={value}
                    size="large"
                    {...getTagProps({ index })}
                    />
                    ))
    }
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Departure Airport" />}

                />
                <Autocomplete
                style={{
                    width:"330px",
                    margin:"auto",
                    backgroundColor:"white"
                }}
                id="size-large-filled"
                size="large"
                options={airports}
                getOptionLabel={(option)=>option}
                //onChange={(ev,value)=>{this.state.destination=value;
                //emptyField='false';
                //this.forceUpdate()}}
                onChange={(event, value) => this.setState({ destination: value }) }
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                    <Chip
                    variant="outlined"
                    label={value}
                    size="large"
                    {...getTagProps({ index })}
                    />
                    ))
    }
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Arrival Airport" />}

                />
                <div className="field">
                <TextField
                    style={{
                    width:"165px",
                    margin:"auto",
                    backgroundColor:"white",
                    }}
                    id="filled-textarea"
                    label= {"Depart Date"}
                    type="date"
                    Inputprops={{inputprops:+{min: today}}}
                    onFocus={this. onFocus} onBlur={this. onBlur}
                    placeholder=""
                    variant="filled"
                    onChange={this.onChangeFlightDate}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    />
                    <TextField
                    style={{
                    width:"165px",
                    margin:"auto",
                    backgroundColor:"white",
                    }}
                    id="filled-textarea"
                    label= {"Arrival Date"}
                    type="date"
                    Inputprops={{inputprops:+{min: today}}}
                    onFocus={this. onFocus} onBlur={this. onBlur}
                    placeholder=""
                    variant="filled"
                    onChange={this.onChangeArrivalDate}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    />
                    <TextField
                    style={{
                    width:"165px",
                    margin:"auto",
                    backgroundColor:"white",
                    }}
                    id="filled-textarea"
                    label= {"no. of adults"}
                    type="number"
                    onFocus={this. onFocus} onBlur={this. onBlur}
                    placeholder=""
                    variant="filled"
                    onChange={this.onChangeArrivalDate}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    />
                    <TextField
                    style={{
                    width:"165px",
                    margin:"auto",
                    backgroundColor:"white",
                    }}
                    id="filled-textarea"
                    label= {"no. of children"}
                    type="number"
                    onFocus={this. onFocus} onBlur={this. onBlur}
                    placeholder=""
                    variant="filled"
                    onChange={this.onChangeArrivalDate}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    />
                    </div>
                    <div className="RadioButtons">
                    <div onChange={this.onChangeValue}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender
                        <RadioGroup row aria-label="Class" name="row-radio-buttons-group">
                        <FormControlLabel value="Bussiness" control={<Radio />} label="Bussiness" />
                        <FormControlLabel value="Economy" control={<Radio />} label="Economy" />
                        <FormControlLabel value="first" control={<Radio />} label="First Class" />
              
                        </RadioGroup>
                        </FormLabel>
                        </FormControl>
                        </div>
                    </div>
                    
                    <input
                     type="submit"
                     className="btn btn-outline-warning btn-block mt-4"
                    
                 />
                    </div>
                  </form>
              </div>
            </div>
            <br />
          </div>
        );
      }
}

export default homepage;