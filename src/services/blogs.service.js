const httpStatus = require('http-status');
const { Blogs } = require('../models');

const ApiError = require('../utils/ApiError');

const latestBlogs = async () => {
  let blogs = await Blogs.find().limit(3);
  return blogs;
};

const blogPost = async (id) => {
  let blogs = await Blogs.findById({ _id: id });
  return blogs;
};

const allBlogs = async () => {
  let blogs = await Blogs.find().sort({ $natural: -1 });
  return blogs;
};

const newPost = async (blog) => {
  return Blogs.create(blog);
};

const blogEdit = async (id, blog) => {
  let filter = { _id: id };
  let updateValues = {
    headline: blog.headline,
    tags: blog.tags,
    subtitle1: blog.subtitle1,
    imageMainBanner: blog.imageMainBanner,
    text1: blog.text1,
    image1: blog.image1,
    image2: blog.image2,
    image3: blog.image3,
    image4: blog.image4,
    subtitle2: blog.subtitle2,
    text2: blog.text2,
  };
  let blogUpdated = await Blogs.findOneAndUpdate(filter, updateValues, { new: true });
  return blogUpdated;
};

const deleteEmail = async (id) => {
  const blog = await Blogs.find({ _id: id });
  if (!blog) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Blog not found!');
  }
  await Blogs.deleteOne({ _id: id });
  return blog;
};

module.exports = {
  latestBlogs,
  allBlogs,
  deleteEmail,
  newPost,
  blogEdit,
  blogPost,
};
