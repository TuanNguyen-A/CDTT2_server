const express = require('express')
const router = express.Router()


const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')
const UserController = require('../controllers/user')


router.route('/list').get(UserController.index)
router.route('/update/:id').post(UserController.updateUser)
router.route('/delete').post(UserController.deleteUser)
router.route('/:id').get(UserController.getUser)
router.route('/search/:search').get(UserController.searchUser)

module.exports = router;