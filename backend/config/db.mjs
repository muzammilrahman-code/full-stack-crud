import mongoose from 'mongoose'
import { DB_NAME } from '../constant.mjs'

export const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(`${process.env.ATLAS_URI}/${DB_NAME}`)
        console.log(`connected to: ${conn.connection.host}`);
        
        
    } catch (error) {
     console.log(`Error: ${error.message}`);
        
    }
}