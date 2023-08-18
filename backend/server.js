import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors'
import http from 'http';
import { MONGODB_URI, PORT } from './config/env.js';
import userRouter from './routes/userRoutes.js';
import movieRouter from './routes/movieRoutes.js';

const app = express();
const server = http.createServer(app);

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors())

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('MongoDB connection error: ' + err.message);
  });

// Define routes (sample)
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Netflix Clone App!' });
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/movies', movieRouter);

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});