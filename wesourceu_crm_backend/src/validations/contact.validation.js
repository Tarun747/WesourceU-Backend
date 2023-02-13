const Joi = require('joi');

const create = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().required().email(),
    message: Joi.string().required(),
  }),
};

module.exports = {
  create,
};
