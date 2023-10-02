const mongoose = require('mongoose');

const resturantSchema = mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
    },
    // name: {
    //   type: String,
    //   required: true,
    // },
    // email: {
    //   type: String,
    //   required: true, 
    // },
    // email: {
    //   type: String,
    //   required: true,
    // },

  },
  {
    timestamps: true,
  }
);

/**
 * @typedef User
 */
const User = mongoose.model('Resturant', resturantSchema);

module.exports = User;
