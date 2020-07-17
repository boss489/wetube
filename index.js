import express from "express"

const express = require('express');
const app = express();

const port = 4000;
const handleListening = () => 
console.log('listening in port ${port}');
// function handleListening(){
//     console.log('listening in port ${port}');
// }

const handleHome = (req, res) => res.send("hello from home");
// function handleHome(req, res){
//     console.log(req);
//     res.send('hello from home');
// }

//arrow function 
const handleProfile = (req, res) => res.send("you are on my profile");
// function handleProfile(req, res){
//     res.send('you are on my profile');
// }
const betweenHome = (req,res,next) => {
    console.log('between');
    next();
};

app.use(betweenHome);// 미들웨어로 사용하겠단 뜻


app.get("/profile", handleProfile);

app.get("/", betweenHome, handleHome);

app.listen(port, handleListening);