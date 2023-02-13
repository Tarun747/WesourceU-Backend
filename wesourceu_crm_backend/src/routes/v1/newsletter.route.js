const express = require('express');
const validate = require('../../middlewares/validate');
const newsletterValidation = require('../../validations/newsletter.validation');
const newsController = require('../../controllers/newsletter.controller');

const router = express.Router();

router.post('/subscribe', validate(newsletterValidation.addEmail), newsController.addEmail);
router.post('/unsubscribe', validate(newsletterValidation.removeEmail), newsController.removeEmail);

module.exports = router;
