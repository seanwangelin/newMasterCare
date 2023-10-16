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
apiRouter.use('/users', usersRouter);

const managersRouter = require('./managers');
apiRouter.use('/managers', managersRouter);

const servicesRouter = require('./services');
apiRouter.use('/services', servicesRouter);

const descriptionsRouter = require('./descriptions');
apiRouter.use('/descriptions', descriptionsRouter);

module.exports = apiRouter;
