// Import packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const products = require('./routes/products')
const properties = require('./routes/properties')
const users = require('./routes/users.js')

//package that allows express to read environment variables
require('dotenv').config();

// Create a server object
const server = express();

// Connect to the database using mongoose
// Note: make sure to put your connection string!
const connectionString = process.env.CONNECTION_STRING
const connectionConfig = { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
};
mongoose
    .connect(connectionString, connectionConfig)
    .then(
        () => {
            console.log('(1) DB is connected')
        }
    )
    .catch(
        (error) => {
            console.log('error occured', error)
        }
    )

//tell express how to use body parser
    server.use( bodyParser.urlencoded({extended: false}));

//also tell express to recognize jsob
    server.use(bodyParser.json());

// Create a Route
server.get(
    '/',                                // http://localhost:3001/
    (req, res) => {
        res.send("<h1>Welcome to Home Page</h1>");
    }
);

server.get(
    '/about',                            // http://localhost:3001/about
    (req, res) => {
        res.send("<h1>About Us</h1>");
    }
);

server.get(
    '/contact',                            // http://localhost:3001/contact
    (req, res) => {
        res.send("<h1>Contact Us</h1>");
    }
);

server.use(
    '/product',
    products
)
server.use(
    '/users',
    users
)

server.use(
    '/properties',
    properties
)


//use heroku port nummber if it exists otherwise use 3001
const port = process.env.PORT || 3001;
server.listen(
    port, 
    () => {
        console.log('(2) server is running on http://localhost:3001')
    }
);