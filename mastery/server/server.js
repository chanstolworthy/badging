
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const maassive = require('massive');
const bodyParser = require('body-parser')
const expressSession = require('express-session')

const app = express();
app.use(bodyParser.json());
app.use(cors());





const port = 3005;

app.listen(port, ()=>{
    console.log(port)
})
