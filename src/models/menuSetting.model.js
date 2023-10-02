const mongoose = require('mongoose');

const menuSettingSchema = mongoose.Schema(
  {
    font: {
      type: String,
    },
    template: {
      type: Number,
    },
    primary: {
      type: String,
    },
    secondary: {
      type: String,
    },
    

  },
  {
    timestamps: true,
  }
);

/**
 * @typedef User
 */
const User = mongoose.model('MenuSetting', menuSettingSchema);

module.exports = User;
