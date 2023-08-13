import express from 'express';
import {
  createUser,
  getUser,
  loginUser,
} from '../controllers/userControllers.js';
import isAuthenticated from '../middleware/authMiddleware.js';
import { userValidationRules } from '../middleware/validationMiddleware.js';

const userRouter = express.Router();

// Register a User
userRouter.post('/', userValidationRules, createUser);

// Login a user
userRouter.get('/', userValidationRules, loginUser);

// Get login user detail
userRouter.get('/', isAuthenticated, getUser);

export default userRouter;
