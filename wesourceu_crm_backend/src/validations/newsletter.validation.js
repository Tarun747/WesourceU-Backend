const Joi = require('joi');

const addEmail = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
  }),
};

const removeEmail = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
  }),
};

module.exports = {
  addEmail,
  removeEmail,
};
