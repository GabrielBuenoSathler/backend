const { response, request } = require("express");
require("express-async-errors")
const migrationRun = require("./database/sqlite/migrations")
const express = require("express");
const routes = require("./routes/");
const AppError = require("./utils/error");
const cors = require("cors")
const app = express()
app.use(cors())

app.use(express.json())
migrationRun()
app.use(routes)
app.use((error,request,next) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
                status: "error",
                message: error.message
            })
    
 
        }
        return response.status(500).json({
            status: "error",
            message: "internal server error",
        })
    })
const PORT = 3333;

app.listen(PORT,() => console.log(`Server is runnig on ${PORT}`)); 
