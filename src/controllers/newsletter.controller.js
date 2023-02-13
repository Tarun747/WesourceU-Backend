const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { newsletterService } = require('../services');

const addEmail = catchAsync(async (req, res) => {
  const user = await newsletterService.addEmail(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const removeEmail = catchAsync(async (req, res) => {
  await newsletterService.deleteEmail(req.body.email);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  addEmail,
  removeEmail,
};
