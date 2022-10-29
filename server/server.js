const express = require("express")
const app = express()
const port = 8000

require("./config/momgoose.config")

app.use(express.json(), express.urlencoded({extended: true}))

const JokeRoutes = require('./routes/jokes.routes')
JokeRoutes(app)

app.listen(port, ()=> console.log(`Express Is Running On Port ${port}`))