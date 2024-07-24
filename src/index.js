require('dotenv').config();
const express = require('express');
const { authenticateDB, sequelize } = require('./config/database');
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');
const errorHandler = require('./middlewares/errorHandler');
const logger = require('./logger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

// Middleware de tratamento de erros
app.use(errorHandler);

authenticateDB().then(() => {
  sequelize.sync().then(() => {
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  });
});
