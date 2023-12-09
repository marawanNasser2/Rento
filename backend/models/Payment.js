const { Schema, model } = require('mongoose');

const paymentSchema = new Schema({
  
  username: { type: String, required: true },
  carPlate: {type: String, required: true},
  amount: { type: Number, required: true },
  paymentDate: { type: Date, default: Date.now },
  paymentMethod: String,
  transactionID: String,
  status: { type: String, default: 'Pending' }, //['Success', 'Pending', 'Failed']

});

const paymentModel = model('Payments', paymentSchema);

module.exports = paymentModel;