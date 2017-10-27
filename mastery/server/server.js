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
