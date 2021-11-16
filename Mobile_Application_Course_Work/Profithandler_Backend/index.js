const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const userController = require('./controllers/userController');

mongoose.connect("mongodb://localhost:27017/profithandler",{ useUnifiedTopology: true })
.then(()=>{
    console.log("success")
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.listen(3000);
///////////////////////////////
    app.post('/user',userController.saveUser);
    app.get('/user',userController.getUser);
    app.get('/user/:email/:password',userController.getLoginDetails);
    app.get('/user/:email',userController.getExistsEmail);
})
.catch((error)=>{
    console.log(error)
});



