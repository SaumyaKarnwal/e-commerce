import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import cors from 'cors';
import Routes from './routes/route.js';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();

const PORT = 8000;
const username  = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username , password);

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

app.listen(PORT, ()=> console.log('Server is up and running'));

DefaultData();
