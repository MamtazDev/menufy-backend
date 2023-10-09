const mongoose = require('mongoose');

const menuSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    submenus: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Submenu',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;