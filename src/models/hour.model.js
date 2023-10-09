const mongoose = require('mongoose');

const hourSchema = mongoose.Schema(
  {
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    
    days: {
      type: Array,
    },
    
    endTime: {
      type: String,
      required: true,
    },
    
    startTime: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef User
 */
const Hour = mongoose.model('Hour', hourSchema);

module.exports = Hour;
