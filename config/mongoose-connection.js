const mongoose = require('mongoose');

mongoose.connect("mongoose://127.0.0.1:27017/bag-app")
.then(function(){
    console.log("connected");
})
.catch(function(err){
    console.log(err);
})

module.exports = mongoose.connection;