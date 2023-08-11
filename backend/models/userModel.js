import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  subscription: {
    type: String,
    enum: ['Basic', 'Standard', 'Premium'],
    default: 'Basic',
  },
  paymentMethod: {
    type: String,
    enum: ['Credit Card', 'PayPal'],
    required: true,
  },
  watchlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
  // Add more fields as needed
});

const User = mongoose.model('User', userSchema);

export default User;
