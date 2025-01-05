import express from 'express';
import routes from './routes.js';
import mongoose from 'mongoose';
import cors from 'cors'
import 'dotenv/config'
import { authMiddleware } from './middlewares/authMiddleware.js';

const app = express();

const url = 'mongodb://127.0.0.1:27017';
mongoose.connect(url, { dbName: 'workshop-games' })
    .then(() => console.log('Db successfully connected'))
    .catch((err) => console.log(`DB failed: ${err}`))

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))

app.use(express.json());

app.use(authMiddleware);
app.use(routes);

app.listen(3000, () => console.log('Server is listening on http://localhost:3000'))