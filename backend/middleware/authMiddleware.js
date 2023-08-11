import jwt from 'jsonwebtoken';
import pkg from 'jsonwebtoken';
const { TokenExpiredError } = pkg;
import { secretKey } from '../config/env.js';

const isAuthenticated = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: 'Access denied. No token provided.' });
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      if (err instanceof TokenExpiredError) {
        return res.status(403).json({ message: 'Token expired' });
      } else {
        return res.status(403).json({ message: 'Invalid token' });
      }
    }
    if (!decoded || !decoded.userId) {
      return res.status(403).json({ message: 'Invalid token payload' });
    }
    req.user = decoded;
    next();
  });
};

export default isAuthenticated;
