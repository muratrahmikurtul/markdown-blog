const { newArticle } = require('../controllers/article')
const router = require('express').Router()

router.get('/new', newArticle)


module.exports = router