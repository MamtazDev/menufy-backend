const mongoose = require('mongoose');

const submenuSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Submenu = mongoose.model('Submenu', submenuSchema);

module.exports = Submenu;
