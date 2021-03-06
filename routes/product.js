const express = require('express')
const router = express.Router()


const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')
const ProductController = require('../controllers/product')


router.route('/homepage').get(ProductController.homePage)
router.route('/add').post(ProductController.add)
router.route('/list').get(ProductController.index)
router.route('/buy/:id').post(ProductController.buyProduct)
router.route('/update/:id').post(ProductController.updateProduct)
router.route('/delete/:id').post(ProductController.deleteProduct)
router.route('/:id').get(ProductController.getProduct)
router.route('/search/:search').get(ProductController.searchProduct)
router.route('/search_by_category/:search').get(ProductController.searchProductByCategory)
router.route('/search_by_category_id/:search').get(ProductController.searchProductByCategoryId)

module.exports = router;