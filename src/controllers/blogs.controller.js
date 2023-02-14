const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { blogsService } = require('../services');

const latestBlog = catchAsync(async (req, res) => {
  const latestBlogs = await blogsService.latestBlogs();
  res.status(httpStatus.CREATED).send({ blogs: latestBlogs });
});

const blogsPost = catchAsync(async (req, res) => {
  const newPost = await blogsService.newPost(req.body);
  res.status(httpStatus.CREATED).send(newPost);
});

const allBlogPost = catchAsync(async (req, res) => {
  const allPost = await blogsService.allBlogs();
  res.status(httpStatus.CREATED).send(allPost);
});

module.exports = {
  latestBlog,
  allBlogPost,
  blogsPost,
};
