const mongoose = require('mongoose');

const resturantSchema = mongoose.Schema(
  {

    cover:{
      type: File,
      required: false,
    },
    profile:{
      type: File,
      required: false,
    },

    businessName: {
      type: String,
      required: true,
    },
    
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true, 
    },

    about: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    languageDefault: {
      type: String,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);

const Resturant = mongoose.model('Resturant', resturantSchema);

module.exports = Resturant;
