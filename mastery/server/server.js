require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const controller = require('./controller');


const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTIONSTRING).then(db => app.set('db', db));


app.post('/api/addproduct', controller.additem)
app.get('/api/getproducts', controller.getProducts)
app.put('/api/changename', controller.changename)
app.delete('/api/bye/:id', controller.deleteItem)


const port = 3000;

app.listen(port, ()=>{
    console.log(port)
})

// DIFFERENT DATATYPES: when you specify the data types, it will specify whether how the data is imputed unto your table. It is important to make sure that if you change the specific data type after your created a table that the new one mimics the previous or else it will not be able to read the previous data and will not allow a change in the data type.  Different data types will take up different amounts of storage.
// I chose to use VARCHAR(50) in my columns instead of text because it takes up almost half of the data space than normal text does.

