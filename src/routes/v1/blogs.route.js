const express = require('express');
const validate = require('../../middlewares/validate');
const { blogsValidation } = require('../../validations');
const blogsController = require('../../controllers/blogs.controller');

const router = express.Router();

router.get('/latest-blog', blogsController.latestBlog);
router.get('/', blogsController.allBlogPost);
router.post('/post', validate(blogsValidation.blogPost), blogsController.blogsPost);

module.exports = router;
