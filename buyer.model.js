const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const buyerSchema = mongoose.Schema(
  {
    id: {
      required: true,
      type: Object,
    },
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    gender: {
      required: true,
      Enum: (male, female, secret),
    },
    age: {
      type: Number,
    },
    boughtProductId: {
      type: Array,
      required: true,
    },
    phoneNumber: {
      type: string, 
    }

  },
  {
    timestamps: true,
  }
);


// Query find
Buyer.find({ age: { $gt: 20 } }, (err, docs) => {
  if (err) {
      console.log(err);
  } else {
      console.log('List age >20: ', docs);
  }
});
Buyer.find({ age: { $gte: 23 } }, (err, docs) => {
  if (err) {
      console.log(err);
  } else {
      console.log('List age >=23: ', docs);
  }
});
Buyer.find({ age: { $lte: 20 } }, (err, docs) => {
  if (err) {
      console.log(err);
  } else {
      console.log('List age <=20: ', docs);
  }
});
Buyer.find({ $and: [{ age: 20 }, { age: 30 }] }, (err, docs) => {
  if (err) {
      console.log(err);
  } else {
      console.log('List age 20 or 30: ', docs);
  }
});
Buyer.find({ email: /^donga.edu.vn/i }, (err, docs) => {
  if (err) {
      console.log(err);
  } else {
      console.log('Email have "donga.edu.vn"', docs);
  }
});
Buyer.find({ gender: 'male' }, (err, docs) => {
  if (err) {
      console.log(err);
  } else {
      console.log('Male buyer', docs);
  }
});
Buyer.find({ $or: [{ firstName: 'Văn' }, { firstName: 'Vân' }] }, (err, docs) => {
  if (err) {
      console.log(err);
  } else {
      console.log('Văn or Vân', docs);
  }
});
Buyer.find({ $and: [{ firstName: 'Ngọc' }, { gender: 'male' }] }, (err, docs) => {
  if (err) {
      console.log(err);
  } else {
      console.log('Ngọc: male', docs);
  }
});
Buyer.find({ phoneNumber: null }, (err, docs) => {
  if (err) {
      console.log(err);
  } else {
      console.log('Phone number: null', docs);
  }
});
Buyer.find({ email: null }, (err, docs) => {
  if (err) {
      console.log(err);
  } else {
      console.log('Email: null', docs);
  }
});
Buyer.find({ phoneNumber: /^[034][0-9]/$ }, (err, docs) => {
  if (err) {
      console.log(err);
  } else {
      console.log('Phone number start with: 034', docs);
  }
});
Buyer.find({ boughtProductId: {$gt: 3} }, (err, docs) => {
  if (err) {
      console.log(err);
  } else {
      console.log('Buy product >3', docs);
  }
});

// add plugin that converts mongoose to json
buyerSchema.plugin(toJSON);
buyerSchema.plugin(paginate);


/**
 * @typedef Buyer
 */
const Buyer = mongoose.model('Buyer', buyerSchema);

module.exports = Buyer;
