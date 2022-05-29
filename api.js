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

router.get('/save', function(req, res) {
    var newStudent = new ProductModel({Name: "Sam", Price: 1.22, Type: "Books", Active: true});

    newStudent.save(function(err, data) {
        if(err) {
            console.log(err);
        }
        else {
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
    StudentModel.findByIdAndDelete((req.body.id), 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log("Data Deleted!");
        }
    });  
});

router.post('/update', function(req, res) {
    StudentModel.findByIdAndUpdate(req.body.id, 
    {Name:req.body.Name}, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log("Data updated!");
        }
    });  
});
  
module.exports = router;