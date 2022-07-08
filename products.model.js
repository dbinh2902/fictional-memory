const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const productsSchema = mongoose.Schema(
  {
    id: {
      required: true,
      type: Object,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imagePath: {
      type: Array,
      trim: true,
    },
    categoryName: {
      type: String,
      trim: true,
    },
    brandName: {
      type: String,
      trim: true,
    },
    CPU: {
      type: String,
      required: true,
      trim: true,
    },
    screenSize: {
      type: String,
      trim: true,
    },
    RAM: {
      type: Number,
      required: true,
    },
    maxRAM: {
      type: Number,
      required: true,
    },
    GPU: {
      type: String,
      required: true,
      trim: true,
    },
    graphicCard: {
      type: String,
      required: true,
      trim: true,
    },
    OS: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


// Query find
Products.find({ RAM: 8, maxRAM: 8 }, (err, docs) => {
  if (err) {
    console.log(err);
  } else {
    console.log('RAM 8Gb and max RAM 8', docs);
  }
});
Products.find(
  {
    $or: [
      { brandName: 'ASUS', RAM: 8 },
      { brandName: 'LENOVO', RAM: 16 },
    ],
  },
  (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      console.log('ASUS: 8Gb or LENOVO: 16Gb', docs);
    }
  }
);

// add plugin that converts mongoose to json
productsSchema.plugin(toJSON);
productsSchema.plugin(paginate);


/**
 * @typedef Products
 */
const Products = mongoose.model('Products', productsSchema);

module.exports = Products;
