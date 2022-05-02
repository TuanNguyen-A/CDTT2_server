const express = require('express')
const router = express.Router()


const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')
const FeedbackController = require('../controllers/feedback')


router.route('/add').post(FeedbackController.add)
router.route('/list').get(FeedbackController.index)
router.route('/delete').post(FeedbackController.deleteFeedback)
router.route('/search/:search').get(FeedbackController.searchFeedback)

module.exports = router;