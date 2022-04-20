const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/SportsManager", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(()=>{
    console.log("Established a connection");
  })
  .catch(()=>{
    console.log("There has been an error")
  })