const User = require('../models/user');

exports.saveUser= async(req, res) =>{
    const user = new User(req.body);
   await user.save();
   res.send(true);
  console.log(req.body);
};

exports.getUser = async(req,res) =>{
    const user = await User.find();
    res.send(user);
};

exports.getExistsEmail = async(req,res) =>{
    let result = false;
    const users = await User.find({},{ email: 1, _id:0});
    users.forEach((data) => {
        if(req.params.email==data.email
         ){
             result = true;
         }
    });
    res.send(result);
}

exports.getLoginDetails = async(req,res) => {
    let result = false;
    // console.log(req.params.email);
    // console.log(req.params.password);
   const users = await User.find({},{ email: 1,password:1, _id:0});
   users.forEach((data) => {
       if(req.params.email==data.email &&
         req.params.password==data.password
        ){
            result = true;
        }
   });
   res.send(result);
};

