const express=require("express");
const app = express();
const request=require("request");
const portNum=8080;
// const path = require('path');
// app.use('/static', express.static(path.join(__dirname, 'public')));  //to use static folder(i.e inside)
app.use(express.static(__dirname));                                  //to use local static file(i.e inside)
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/signup.html");
});

app.post("/",(req,res)=>{
    // console.log(req.body.nameInp);
    var name = req.body.nameInp;
    var email = req.body.emailInp;
    console.log(name , email);  
    res.sendFile(__dirname+"/success.html");
});


app.listen(portNum,()=>{
    console.log("Server Started "+__dirname);
});

//API key
//aa194f8904a6d6055e521a38f7685948-us8

//list and audience id 
//2e716f2b8a