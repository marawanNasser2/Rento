const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  dateOfBirth: String,
  gender: String,
  address: String,
  phone: String,
  createdAt: { type: Date, default: Date.now },
});

const userModel = model('User', userSchema);

module.exports = userModel;
