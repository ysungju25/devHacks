'use strict'
require('dotenv').config()
const express = require('express')
const app = express()
//const session = require('express-session')
const bodyParser = require('body-parser')
const routes = require('./routes')
//const sessionStore = require('./config/promiseConnection')
//const PORT = process.env.PORT
/*
if (process.env.NODE_ENV === 'production') {  
  console.log(`Run client/build `);
  app.use('/', express.static('client/build'))
}
*/
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(routes)


app.get('/', (req, res) => res.send('Working!'));
//app.listen(PORT, () => console.log(`React API server listening on PORT ${PORT}.`))
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
