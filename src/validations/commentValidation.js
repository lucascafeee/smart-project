const Joi = require('joi');

const commentSchema = Joi.object({
  content: Joi.string().required(),
  postId: Joi.number().integer().required(),
});

module.exports = {
  commentSchema,
};
