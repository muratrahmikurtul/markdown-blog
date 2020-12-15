const express = require('express')
const articleRouter = require('./routes/articles')
const indexRouter = require('./routes/index')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.use('/', indexRouter)

app.listen(3000)