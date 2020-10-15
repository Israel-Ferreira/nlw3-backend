import express from 'express';
import bodyParser from 'body-parser';
import path from 'path'

import cors from 'cors';

import  'express-async-errors';


import "reflect-metadata"

import './database/connection';


import OrphanageRouter from './routes/OrphanageRouter';
import ErrorHandler from './errors/ErrorHandler';

const PORT = process.env.PORT || 3333;

const app =  express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())



app.get("/", (req,res,next) => {
    res.status(200).json({message: "Hello World"})
})

app.use('/storage', express.static(path.join(__dirname, '..', '/storage')))

app.use("/orphanages", OrphanageRouter)

app.use(ErrorHandler);


app.listen(PORT)


