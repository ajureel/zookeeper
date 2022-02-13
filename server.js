// include packages
const fs = require('fs');
const path = require('path');
const express = require('express');
const { animals } = require('./data/animals');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// set the port
const PORT = process.env.PORT || 3001;

// initiate an express server object
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
//static needs to be set before the other routes
app.use(express.static('public'));//set up our front end to enable stuff to be included
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);







//add a listener
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});