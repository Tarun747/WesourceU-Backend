const httpStatus = require('http-status');
const { Blogs } = require('../models');

const ApiError = require('../utils/ApiError');

const latestBlogs = async () => {
  let blogs = await Blogs.find().sort({ $natural: -1 }).limit(3);
  return blogs;
};

const allBlogs = async () => {
  let blogs = await Blogs.find().sort({ $natural: -1 });
  return blogs;
};

const newPost = async (blog) => {
  return Blogs.create(blog);
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
  latestBlogs,
  allBlogs,
  deleteEmail,
  newPost,
};
