const mongoose = require('mongoose');
const BeerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: false
  },
  status: {
    type: String,
    enum: ['In Inventory', 'Sold'],
    default: 'In Inventory'
  }
}, {
  timestamps: true
});

BeerSchema.query.drafts = function () {
  return this.where({
    status: 'In Inventory'
  });
};

BeerSchema.query.published = function () {
  return this.where({
    status: 'Sold'
  });
};

module.exports = mongoose.model('Beer', BeerSchema);