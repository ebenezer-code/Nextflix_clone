import express from 'express';
import { createUser, getUser } from '../controllers/userControllers.js';
import isAuthenticated from '../middleware/authMiddleware.js';

const userRouter = express.Router();

// Register a User
userRouter.post('/', createUser);

// Get a user
userRouter.get('/', isAuthenticated, getUser);

export default userRouter;
