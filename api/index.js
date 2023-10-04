const apiRouter = require('express').Router();

apiRouter.get('/', (req, res, next) => {
  res.send({
    message: 'API is under construction!',
  });
});

apiRouter.get('/health', (req, res, next) => {
  res.send({
    healthy: true,
  });
});

// place your routers here
const usersRouter = require('./user');
const managersRouter = require('./managers');
apiRouter.use('./user', usersRouter);
apiRouter.use('./managers', managersRouter);

module.exports = apiRouter;
