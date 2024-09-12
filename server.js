import express from 'express';
import "dotenv/config"
// import initKnex from 'knex';
import config from "./knexfile.js"
import cors from 'cors';


// const knex = initKnex(config); //importing server data from knex config file and saving it into a variable

const app = express(); //initializing an express app

const PORT = process.env.PORT || 8080; //setting the port to be taken from the .env or setting backup

app.use(express.json()); //initializing json middleware 
app.use(cors({origin: process.env.CORS_ORIGIN})); //intialize cors for sending and receiving data from client-end

app.listen(PORT, ()=> {
    console.log("App running on port:" + PORT);
});