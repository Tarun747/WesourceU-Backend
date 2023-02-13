const httpStatus = require('http-status');
const { Newsletter } = require('../models');

const ApiError = require('../utils/ApiError');

const addEmail = async (newsletterBody) => {
  if (await Newsletter.isEmailTaken(newsletterBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  return Newsletter.create(newsletterBody);
};

const deleteEmail = async (email) => {
  const user = await Newsletter.find({ email: email });
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await Newsletter.deleteOne({ email: email });
  return user;
};

module.exports = {
  addEmail,
  deleteEmail,
};
