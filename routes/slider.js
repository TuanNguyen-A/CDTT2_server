const express = require('express')
const router = express.Router()


const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')
const SliderController = require('../controllers/slider')

router.route('/add').post(SliderController.add)
router.route('/list').post(SliderController.index)

module.exports = router;