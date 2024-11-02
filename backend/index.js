import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/db.js";
import dotenv from "dotenv";
dotenv.config({});

const app = express();

// app.get("/home",(req,res)=>{
//     return res.status(200).json({
//         message:"I ma coming from backend",
//         success:true
//     })
// });

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'https://localhost:5173',
    credentials:true
}


app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server running at port  ${PORT}`)
});