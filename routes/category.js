const express = require('express')
const router = express.Router()


const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')
const CategoryController = require('../controllers/category')


router.route('/add').post(CategoryController.add)
router.route('/list').post(CategoryController.index)
router.route('/delete').post(CategoryController.deleteCate)


module.exports = router;