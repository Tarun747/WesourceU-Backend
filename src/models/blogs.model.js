const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const blogsSchema = mongoose.Schema(
  {
    dateOfPosting: {
      type: Date,
      default: Date.now,
    },
    headline: {
      type: String,
    },
    tags: {
      type: String,
    },
    subtitle1: {
      type: String,
    },
    imageMainBanner: {
      type: String,
    },
    text1: {
      type: String,
    },
    image1: {
      type: String,
    },
    image2: {
      type: String,
    },
    image3: {
      type: String,
    },
    image4: {
      type: String,
    },
    subtitle2: {
      type: String,
    },
    text2: {
      type: String,
    },
    text3: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
blogsSchema.plugin(toJSON);
blogsSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
blogsSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

const Blogs = mongoose.model('Blogs', blogsSchema);

module.exports = Blogs;
