const { Schema, model } = require('mongoose');

const adminSchema = new Schema({
  
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  createdAt: { type: Date, default: Date.now },

});

const adminModel = model('Admins', adminSchema);

module.exports = adminModel;