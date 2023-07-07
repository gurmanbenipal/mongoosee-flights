const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
      type: String,
      enum: ['YVR', 'YYZ', 'LAX', 'AMD', 'LHR'],
      required: true
    },
  arrival: Date,


}, {
    timestamps: true
});

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['WestJet', 'Emirates', 'AirCanada', 'Qatar'],
    required: true
  },
  airport: {
    type: String,
    enum: ['YVR', 'YYZ', 'LAX', 'AMD', 'LHR'],
    required: true
  },
  flightNo: Number,
  departs: Date,
  destinations: [destinationSchema]
}, {
  timestamps: true
});


module.exports = mongoose.model('Flight', flightSchema);