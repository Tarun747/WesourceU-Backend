const Joi = require('joi');

const blogPost = {
  body: Joi.object().keys({
    headline: Joi.string().required(),
    tags: Joi.string().required(),
    subtitle1: Joi.string().required(),
    imageMainBanner: Joi.string().required(),
    text1: Joi.string().required(),
    image1: Joi.string().required(),
    image2: Joi.string().required(),
    image3: Joi.string().required(),
    image4: Joi.string().required(),
    subtitle2: Joi.string().required(),
    text2: Joi.string().required(),
  }),
};

module.exports = {
  blogPost,
};
