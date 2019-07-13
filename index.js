const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Noobster');
});

app.listen(3939, (err) => {
    if (err) throw err;
    console.log("Server Running on Port 3939");
});