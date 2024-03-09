const express = require('express');
const mongoose = require('mongoose');
const { connectDB } = require('./Config/db');
const router = require('./Routes/UserRouts');
const cors = require('cors');
require('dotenv').config();

connectDB();

const app = express();
const PORT = process.env.PORT || 2222;

// Use CORS with specific options if needed
app.use(cors());

app.get("/",(req,res)=>{
    res.send("ArvindKumar")
})
// Use express.json() for parsing the request body
app.use(express.json());

app.use('/user',router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); 
});