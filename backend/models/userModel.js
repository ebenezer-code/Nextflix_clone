import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dateOfBirth: { type: Date },
  subscription: {
    type: String,
    enum: ['Basic', 'Standard', 'Premium'],
    default: 'Basic',
  },
  paymentMethod: {
    type: String,
    enum: ['Credit Card', 'PayPal'],
  },
  watchlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
  // Add more fields as needed
});

const User = mongoose.model('User', userSchema);

export default User;
