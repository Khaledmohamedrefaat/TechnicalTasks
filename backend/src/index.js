const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');

const TodoController = require('./controllers/TodoController');

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";

const app = express();

app.use(morgan());
app.use(cors({origin:"*", methods : ['GET', 'POST', 'PUT', 'DELETE']}));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

mongoose.connect(MONGO_URI, (err)=>{
    if (err){
        throw err;
    }
    console.log("Connection To Databse Successful");
});

const todoController = new TodoController(app);

app.listen(PORT, ()=>{
    console.log("Listening on port 3000");
})