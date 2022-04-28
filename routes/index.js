const userRouter = require('./user')
const authRouter = require('./auth')
const categoryRouter = require('./category')
const productRouter = require('./product')
const sliderRouter = require('./slider')
const discountRouter = require('./discount')
const orderRouter = require('./order')
const adminRouter = require('./admin')

const ProductController = require('../controllers/product')

function route(app) {
    app.use('/auth', authRouter);
    app.use('/category', categoryRouter);
    app.use('/product', productRouter);
    app.use('/slider', sliderRouter);
    app.use('/user', userRouter);
    app.use('/discount', discountRouter);
    app.use('/order', orderRouter);
    app.use('/admin', adminRouter);

    //app.use('/', userRouter);
}

module.exports = route