const express = require('express');
const Comment = require('../models/comment');
const router = express.Router();

// Adicionar um comentário a um post
router.post('/', async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Apagar um comentário de um post
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Comment.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
