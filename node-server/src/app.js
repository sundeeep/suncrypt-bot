import express from 'express';
import dotenv from 'dotenv';
dotenv.config({
    path:"./"
});

const app = express();
app.use(express.json());


app.use("/hello_world", (req, res)=>{
    res.status(200).json({
        message: "Hello, World!"
    })
});

export default app;