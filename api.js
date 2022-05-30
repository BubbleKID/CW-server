const mongoose = require('mongoose');
const express = require('express'); 
const router = express.Router();
const ProductModel = require('./productschema');

// Connecting to database
const username = encodeURIComponent("marksama");
const password = encodeURIComponent("eLZ2EOSUG4yBfGhh");
const query = `mongodb+srv://${username}:${password}@cluster0.qpmztq7.mongodb.net/?retryWrites=true&w=majority`;
  
const db = (query);
mongoose.Promise = global.Promise;
  
mongoose.connect(db, { useNewUrlParser : true, 
useUnifiedTopology: true }, function(error) {
    if (error) {
        console.log("Error!" + error);
    }
});

router.post('/save', function(req, res) {
  const newProduct = new ProductModel();
  newProduct.name = req.body.name;
  newProduct.price = req.body.price;
  newProduct.type = req.body.type;
  newProduct.active = req.body.active;

  newProduct.save(function(err, data){
    if(err){
      console.log(err);
    }
    else{
      console.log("Data inserted");
      res.send("Data inserted");
    }
  });
});

router.get('/findall', function(req, res) {
  ProductModel.find(function(err, data) {
    if(err){
      console.log(err);
    }
    else{
      res.send(data);
    }
  });  
});

router.post('/delete', function(req, res) {
  ProductModel.findByIdAndDelete((req.body._id),
  function(err, data) {
    if(err){
      console.log(err);
    }
    else{
      res.send("Data Deleted!");
      console.log(data);
    }
  });  
});

router.post('/update', function(req, res) {
    ProductModel.findByIdAndUpdate(req.body._id, 
    {
      name: req.body.name,
      price: req.body.price,
      type: req.body.type,
      active: req.body.active,
    }, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send('Data updated!');
            console.log("Data updated!");
        }
    });  
});
  
module.exports = router;