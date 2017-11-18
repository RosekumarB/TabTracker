const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')  //to provide logs about server hits

const app = express()
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())

app.get('/status',(req,res) => {
    res.send('Hello world');
})

app.listen(8082);

