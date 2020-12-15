const { getArticles } = require('../controllers/index')
const router = require('express').Router()


router.get('/', getArticles)

module.exports = router