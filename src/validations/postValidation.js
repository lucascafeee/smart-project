const Joi = require('joi');

const postSchema = Joi.object({
    title: Joi.string().max(255).required(),
    content: Joi.string().required(),
});

module.exports = {
    postSchema,
};
