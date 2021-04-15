const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const corsOptions={
    origin:['http://example.com','http://localhost:4200','https://www.w3schools.com'],
    optionsSuccessStatus:200
}

app.use(cors(corsOptions))

app.use('./image',express.static('./images'))
app.use(express.json())

app.use(require('./src/routes/routes.js'))

const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || "development"

app.listen(port,()=>{
    console.log(`Listening on port: ${port}`)
    console.log(`ENV on port: ${env}`)
    console.log("Press Ctrl + C to quit.")
})