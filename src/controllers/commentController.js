const { Comment } = require('../models');
const asyncHandler = require('../middlewares/asyncHandler');
const validate = require('../middlewares/validate');
const { commentSchema } = require('../validations/commentValidation');
const logger = require('../logger');

const createComment = asyncHandler(async (req, res) => {
  const comment = await Comment.create(req.body);
  logger.info('Comment created', { comment });
  res.status(201).json(comment);
});

const deleteComment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Comment.destroy({ where: { id } });
  logger.info(`Comment deleted: ${id}`);
  res.status(204).send();
});

module.exports = {
  createComment: [validate(commentSchema), createComment],
  deleteComment,
};
