const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const receiptsSchema = mongoose.Schema(
  {
    id: {
      required: true,
      type: Object,
    },
    buyerId: {
      type: Object,
      required: true,
    },
    productId: {
      type: Object,
      required: true,
    },
    payInMethod: {
      Enum: (cash, creditcard, installment),
      required: true,
    },
    categoryName: {
      type: String,
      trim: true,
    },
    createdAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
receiptsSchema.plugin(toJSON);
receiptsSchema.plugin(paginate);


/**
 * @typedef Receipts
 */
const Receipts = mongoose.model('Receipts', receiptsSchema);

module.exports = Receipts;
