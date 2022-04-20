const express = require('express')
const router = express.Router()


const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')
const SliderController = require('../controllers/slider')

router.route('/add').post(SliderController.add)
router.route('/list').get(SliderController.index)
router.route('/update/:id').post(SliderController.updateSlider)
router.route('/delete').post(SliderController.deleteSlider)
router.route('/:id').get(SliderController.getSlider)
router.route('/search/:search').get(SliderController.searchSlider)

module.exports = router;