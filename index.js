const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const user = require('./user.route');
const mongoose = require('mongoose');

require('dotenv').config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/user', user);

mongoose.connect(process.env.dburi, { useNewUrlParser: true }).then(console.log("MongoDB Connection Established")).catch(err => console.log(""+err));
let db = mongoose.connection;
// console.log(db);
// console.log(db.readyState);

app.get('/', (req, res) => {
    res.send('Noobster' + db.readyState);
});

app.listen(3939, (err) => {
    if (err) throw err;
    console.log("Server Running on Port 3939");
});