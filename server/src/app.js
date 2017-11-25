const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')  //to provide logs about server hits
const { sequelize } = require('./models/index')
const config = require('./config/config')
const {Bookmark} = require('./models')

const app = express()
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())



require('./routes.js')(app)

sequelize.sync({force: false})
        .then(()=>{
            app.listen(config.port)
            console.log('server has started');
        })

