const express = require('express');

const app = express();

require('./config/mongoose.config');

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

require('./routes/athlete.routes')(app);

app.listen(8000, ()=>{
    console.log("Listening at port 8000");
})