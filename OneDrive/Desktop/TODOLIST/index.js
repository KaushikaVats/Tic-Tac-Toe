const express = require('express')


const app = express()
app.use(express.json())

//stitching the routes
require("./routes/todos.routes")(app)

app.listen(8000, ()=>{
    console.log("App started at port num " , 8000)
})