const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')  //to provide logs about server hits

const app = express()
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())

app.post('/register',(req,res) => {
    console.log(req.body.email," has passwrod" , req.body.password);
    res.send(`your user was registered with username ${req.body.email}`);
})

app.listen(8082);

