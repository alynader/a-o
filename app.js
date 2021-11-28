const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// add admin
// app.get("/CreateUser", (req, res) => {
//      let newUser = new User({
//        Name : "Romero",
//        Admin:true,
//        Email : "Romero@student.guc.edu.eg",
//        Age : 21,
//        LivesIn : "Italy",
//        MartialStatus : "Single",
//        PhoneNumber : "01123477228",
//        Job : "Admin"
//    })
//    newUser.save()
//    .then((doc)=> {
//      res.send(doc);
//      console.log('admin added');
//    })
//    .catch(err=>{
//      console.error(err)
//    });
//  });
   

// routes
const flights = require('./routes/api/flights');
const users = require('./routes/api/Users');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/flights', flights);
app.use('/api/Users', users);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));