const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');
const Resturant = require('../models/resturant.model');

const createResturant = catchAsync(async (req, res) => {
  try {
    const {
      businessName,
      name,
      email,
      about,
      phone,
      address,
      currency,
      languageDefault,
    } = req.body;

    // Assuming you are storing file information in req.files.cover and req.files.profile
    const { cover, profile } = req.files;

    const restaurant = new Resturant({
      cover: cover ? cover[0].buffer : undefined, // Store file buffer if it exists
      profile: profile ? profile[0].buffer : undefined, // Store file buffer if it exists
      businessName,
      name,
      email,
      about,
      phone,
      address,
      currency,
      languageDefault,
    });

    const savedRestaurant = await restaurant.save();
    res.status(201).json(savedRestaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the restaurant.' });
  }
});

const getResturant = catchAsync(async (req, res) => {
  try {
    // Retrieve the restaurant based on some identifier (e.g., restaurant ID) from the request parameters
    const restaurantId = req.params.restaurantId; // Assuming you pass the restaurant ID as a route parameter

    // Fetch the restaurant from your database using your `Resturant` model
    const restaurant = await Resturant.findById(restaurantId);

    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    // Send the retrieved restaurant as a response
    res.json({ restaurant });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the restaurant.' });
  }
});

const updateResturant = catchAsync(async (req, res) => {
  try {
    // Retrieve the restaurant ID from the request parameters
    const restaurantId = req.params.restaurantId;

    // Extract the updated restaurant data from the request body
    const {
      businessName,
      name,
      email,
      about,
      phone,
      address,
      currency,
      languageDefault,
    } = req.body;

    // Assuming you are storing file information in req.files.cover and req.files.profile
    const { cover, profile } = req.files;

    // Fetch the existing restaurant from the database
    const existingRestaurant = await Resturant.findById(restaurantId);

    if (!existingRestaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    // Update the restaurant properties based on the request data
    existingRestaurant.cover = cover ? cover[0].buffer : existingRestaurant.cover;
    existingRestaurant.profile = profile ? profile[0].buffer : existingRestaurant.profile;
    existingRestaurant.businessName = businessName;
    existingRestaurant.name = name;
    existingRestaurant.email = email;
    existingRestaurant.about = about;
    existingRestaurant.phone = phone;
    existingRestaurant.address = address;
    existingRestaurant.currency = currency;
    existingRestaurant.languageDefault = languageDefault;

    // Save the updated restaurant
    const updatedRestaurant = await existingRestaurant.save();

    // Send the updated restaurant as a response
    res.json({ restaurant: updatedRestaurant });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the restaurant.' });
  }
});

// const updateUser = catchAsync(async (req, res) => {
//   const user = await userService.updateUserById(req.params.userId, req.body);
//   res.send(user);
// });

const deleteResturant = catchAsync(async (req, res) => {
  try {
    // Retrieve the restaurant ID from the request parameters
    const restaurantId = req.params.restaurantId;

    // Fetch the restaurant from the database and delete it
    const deletedRestaurant = await Resturant.findByIdAndDelete(restaurantId);

    if (!deletedRestaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    // Send a success message as a response
    res.json({ message: 'Restaurant deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the restaurant.' });
  }
});

module.exports = {
  createResturant,
  getResturant,
  updateResturant,
  deleteResturant,
  
};
