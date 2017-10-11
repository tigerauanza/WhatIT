const express = require('express')
const { twig } = require('twig') 

const app = express() //run function express

app.set('view engine', 'twig')

const homeController = require('./controllers/home.controller')
const newsController = require('./controllers/news.controller')
const knowledgeController = require('./controllers/knowledge.controller')
const webboardController = require('./controllers/webboard.controller')
const aboutusController = require('./controllers/aboutus.controller')

app.get('/', homeController.index)
app.get('/', newsController.index)



app.use('/assets', express.static(__dirname + '/static/assets', {
	maxAge: 86400000
}))

app.listen(8000, function(err) { 
	console. log('Server is running on port 8000')
})