import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.mjs';
import productRouter from './route/product.router.mjs'
import { errorHandler } from './middleware/error.middleware.mjs';
import cors from "cors"


dotenv.config();
const app = express()
const port =  process.env.PORT
app.use(express.json())
app.use(cors())

app.use("/api/v1/crud", productRouter)


app.use(errorHandler)
connectDB()
app.listen(port, ()=>{
    console.log(`server is running at port: ${port}`);
    
})