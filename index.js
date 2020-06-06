

const express = require('express');
const app = express();

const port = 4000;
function handleListening(){
    console.log('listening in port ${port}');
}

app.listen(port, handleListening);