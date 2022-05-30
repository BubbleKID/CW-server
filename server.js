const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();
const api = require('./api');

app.listen(port, () => {
  console.log(`server running in ${port}`);
});

app.use(cors());

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true})); 
  
// Parses the text as json
app.use(bodyParser.json()); 
  
app.use('/api', api);

app.get('/', function(req, res){
  res.send('You shall not pass!');
});