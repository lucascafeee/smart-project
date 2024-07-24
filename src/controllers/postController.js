const { Post } = require('../models');
const asyncHandler = require('../middlewares/asyncHandler');
const validate = require('../middlewares/validate');
const { postSchema } = require('../validations/postValidation');
const logger = require('../logger');

const createPost = asyncHandler(async (req, res) => {
  const post = await Post.create(req.body);
  logger.info('Post created', { post });
  res.status(201).json(post);
});

const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.findAll();
  logger.info('Retrieved all posts');
  res.status(200).json(posts);
});

const updatePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const [updated] = await Post.update(req.body, { where: { id } });
  if (updated) {
    const updatedPost = await Post.findOne({ where: { id } });
    logger.info(`Post updated: ${id}`, { post: updatedPost });
    res.status(200).json(updatedPost);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Post.destroy({ where: { id } });
  logger.info(`Post deleted: ${id}`);
  res.status(204).send();
});

module.exports = {
  createPost: [validate(postSchema), createPost],
  getAllPosts,
  updatePost: [validate(postSchema), updatePost],
  deletePost,
};
