const express = require('express')
const router = express.Router()


const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')
const DiscountController = require('../controllers/discount')

router.route('/add').post(DiscountController.add)
router.route('/list').get(DiscountController.index)
router.route('/update/:id').post(DiscountController.updateDiscount)
router.route('/delete').post(DiscountController.deleteDiscount)
router.route('/:id').get(DiscountController.getDiscount)
router.route('/search/:search').get(DiscountController.searchDiscount)

module.exports = router;