const { Router } = require('express')
const PeopleController = require('../controllers/PeopleController')

const router = Router()
router.get('/api/people', PeopleController.getPeople)

module.exports = router