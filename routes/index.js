const userRouter = require('./user')
const authRouter = require('./auth')
const categoryRouter = require('./category')

function route(app) {
  app.use('/auth', authRouter);
  app.use('/category', categoryRouter);

  //app.use('/', userRouter);
}

module.exports = route