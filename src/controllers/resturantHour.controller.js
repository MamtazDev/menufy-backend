const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');
const Resturant = require('../models/resturant.model');
const Hour = require('../models/hour.model');

const createHour = catchAsync(async (req, res) => {
  try {
    const hour = new Hour(req.body);
    await hour.save();
    res.status(201).json(hour);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const getHour = catchAsync(async (req, res) => {
  try {
    const hour = await Hour.findById(req.params.id);
    if (!hour) {
      return res.status(404).json({ message: 'Hour not found' });
    }
    res.json(hour);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const updateHour = catchAsync(async (req, res) => {
  try {
    const hour = await Hour.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!hour) {
      return res.status(404).json({ message: 'Hour not found' });
    }
    res.json(hour);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



const deleteHour = catchAsync(async (req, res) => {
  try {
    const hour = await Hour.findByIdAndRemove(req.params.id);
    if (!hour) {
      return res.status(404).json({ message: 'Hour not found' });
    }
    res.json({ message: 'Hour deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = {
  createHour,
  getHour,
  updateHour,
  deleteHour,
};
