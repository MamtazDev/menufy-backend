const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const resturantProfile = {
  body: Joi.object().keys({
    name: Joi.string(),
    dateOfBirth:  Joi.string().required().custom(password),
    address: Joi.string(),
    currency: Joi.string(),
    phone: Joi.string(),
    about: Joi.string(),
    password: Joi.string().required().custom(password),
    email: Joi.string().required().email(),
    username: Joi.string(),
    businessname: Joi.string(),
  }),
};

const features = {
  query: Joi.object().keys({
    title: Joi.string(),
    featureArray: Joi.array().items(
      Joi.object({
        icon: Joi.string(),
        feature: Joi.string()
      })
    ).has(Joi.object({ icon: Joi.string(), feature: Joi.string() }))
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const resturant  = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  features,
  resturantProfile
};
