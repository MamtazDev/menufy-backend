const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { settingService } = require('../services');


const addSetting = catchAsync(async (req, res) => {

  const { user, font, template, primary, secondary } = req.body;
  console.log("req.body;", req.body)
  
  const setting = await   settingService.addService({font, template,primary, secondary,user}  )
  
  console.log("setting", setting)


  // const user = await authService.loginUserWithEmailAndPassword(email, password);
  res.send({ setting });
});

const getSetting = catchAsync(async (req, res) => {

  // Retrieve the setting based on some identifier (e.g., setting ID) from the request parameters or query string
  const settingId = req.params.settingId; // Assuming you pass the setting ID as a route parameter

  // Fetch the setting from your data source (e.g., database) using a service function
  const setting = await settingService.getSettingById(settingId);

  if (!setting) {
    return res.status(404).json({ message: "Setting not found" });
  }

  // Send the retrieved setting as a response
  res.json({ setting });

  
  res.send({ user, tokens });
});


const updateSetting = catchAsync(async (req, res) => {
  // Retrieve the setting ID from the request parameters
  const settingId = req.params.settingId;

  // Extract the updated settings data from the request body
  const { font, template, primary, secondary } = req.body;

  // Call a service function to update the setting based on the setting ID
  const updatedSetting = await settingService.updateSetting(settingId, {
    font,
    template,
    primary,
    secondary,
  });

  if (!updatedSetting) {
    return res.status(404).json({ message: "Setting not found" });
  }

  // Send the updated setting as a response
  res.json({ setting: updatedSetting });
});


module.exports = {
  addSetting,
  getSetting,
  updateSetting
};
