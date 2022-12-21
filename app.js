const express = require("express");
const app = express();

const path = require('path');
app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () =>{
    console.log("servidor corriendo")
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
});


