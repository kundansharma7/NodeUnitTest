const express =  require('express');
const http = require('http')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb', function (err) {
   if (err) throw err;
   console.log('Successfully connected');
}, {
    useMongoClient: true
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


/**
 * Routes
 */
require('./routes/route-user')(app);


let server = http.createServer(app);
server.listen(30011, (req, res) => {
    console.log("Server is running on port 30011")
})