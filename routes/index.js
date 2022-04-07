const userRouter = require('./user')
const authRouter = require('./auth')
const categoryRouter = require('./category')
const sliderRouter = require('./slider')

function route(app) {
    app.use('/auth', authRouter);
    app.use('/category', categoryRouter);
    app.use('/slider', sliderRouter);

    //app.use('/', userRouter);
}

module.exports = route