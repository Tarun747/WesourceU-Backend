const emailService = require('./email.service');

const sendEmail = async (body) => {
  const user = await emailService.contactEnquiry(body);
  return user;
};

module.exports = {
  sendEmail,
};
