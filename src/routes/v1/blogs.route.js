const express = require('express');
const validate = require('../../middlewares/validate');
const { blogsValidation } = require('../../validations');
const blogsController = require('../../controllers/blogs.controller');

const router = express.Router();

router.get('/latest-blog', blogsController.latestBlog);
router.get('/', blogsController.allBlogPost);
router.get('/:id', blogsController.blogPost);
router.post('/post', validate(blogsValidation.blogPost), blogsController.blogsPost);
router.put('/:id', validate(blogsValidation.blogPost), blogsController.blogEdit);
router.delete('/:id', blogsController.deleteBlog);
module.exports = router;
