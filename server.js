const express = require('express');
const logger = require('morgan');

const app = express();


// Always require and configure near the top 
require('dotenv').config();

// Connect to the database
require('./config/database');
app.use(express.json());


// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});