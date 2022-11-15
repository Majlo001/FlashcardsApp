import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors";

const app = express()
dotenv.config()


const connect = async () =>{ 
    try {
        await mongoose.connect(process.env.mongoDB);
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    } 
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
})
mongoose.connection.on("connected", () => {
    console.log("mongoDB connected!");
})


app.use(cors());
app.use(express.json());





app.listen(8080, () => {
    connect();
})