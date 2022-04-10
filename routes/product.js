const express = require('express')
const router = express.Router()


const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')
const ProductController = require('../controllers/product')


router.route('/add').post(ProductController.add)
router.route('/list').post(ProductController.index)
router.route('/update/:id').post(ProductController.updateProduct)
router.route('/delete').post(ProductController.deleteProduct)

module.exports = router;