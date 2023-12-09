const { Schema, model } = require('mongoose');

const CarSchema = new Schema({
  
  carID: { type: 'Number', required: true, unique: true },
  carPlate: { type: 'String', required: true },
  Model: { type: 'String', required: true },
  Brand: { type: 'String', required: true, },
  Year: { type: 'Number', required: true, },
  carType: { type: 'String', required: true, },
  Availability: { type: 'Boolean', required: true, default: true },
  carImages: {type: 'String', required: true} // Array of image URLs
});

const carModel = model('Cars', CarSchema);

module.exports = carModel;