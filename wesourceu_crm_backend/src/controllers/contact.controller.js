const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { contactService } = require('../services');

const addEnquiry = catchAsync(async (req, res) => {
  let user = await contactService.sendEmail(req.body);
  res.status(httpStatus.CREATED).send(user);
});

module.exports = {
  addEnquiry,
};
