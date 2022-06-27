const userRouter = require('./user')
const authRouter = require('./auth')
const categoryRouter = require('./category')
const productRouter = require('./product')
const discountRouter = require('./discount')
const orderRouter = require('./order')
const adminRouter = require('./admin')
const feedbackRouter = require('./feedback')

const ProductController = require('../controllers/product')

function route(app) {
    app.use('/auth', authRouter);
    app.use('/category', categoryRouter);
    app.use('/product', productRouter);
    app.use('/user', userRouter);
    app.use('/discount', discountRouter);
    app.use('/order', orderRouter);
    app.use('/admin', adminRouter);
    app.use('/feedback', feedbackRouter);

    //app.use('/', userRouter);
}

module.exports = route