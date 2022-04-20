const express = require('express')
const router = express.Router()


const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')
const OrderController = require('../controllers/order')

router.route('/add').post(OrderController.add)
router.route('/list').get(OrderController.index)
router.route('/confirm/:id').post(OrderController.confirmOrder)
router.route('/delete').post(OrderController.deleteOrder)
router.route('/:id').get(OrderController.getOrder)
router.route('/search/:search').get(OrderController.searchOrder)

module.exports = router;