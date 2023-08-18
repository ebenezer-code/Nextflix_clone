import { body } from 'express-validator';

export const userValidationRules = [
  body('email').isEmail().withMessage('Invalid email address'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  // Add more validation rules as needed
];
