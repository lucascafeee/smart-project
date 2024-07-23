const express = require('express');
const { authenticateDB, sequelize } = require('./models');
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

authenticateDB().then(() => {
  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });
});
