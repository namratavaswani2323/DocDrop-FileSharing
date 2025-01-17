import express from 'express';
import router from './routes/route.js';
import cors from 'cors';
import DBConnection from './database/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/',router);

const PORT= process.env.PORT || 8000;

DBConnection();

app.listen(PORT,()=>console.log(`Server is running on PORT ${PORT}`));