const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { settingService } = require('../services');


const addSetting = catchAsync(async (req, res) => {

  const { font, template, primary, secondary } = req.body;
  console.log("req.body;", req.body)
  
  const setting = await   settingService.addService({font, template,primary, secondary}  )
  
  console.log("setting", setting)


  // const user = await authService.loginUserWithEmailAndPassword(email, password);
  res.send({ setting });
});

const getSetting = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens });
});

const updateSetting = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens });
});


module.exports = {
  addSetting,
  getSetting,
  updateSetting
};
