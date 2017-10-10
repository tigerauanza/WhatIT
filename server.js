const express = require('express')
const { twig } = require('twig') 

const app = express() //run function express

app.set('view engine', 'twig')

const homeController = require('./controllers/news.controller')

app.get('/', homeController.index)


app.use('/Ps', express.static(__dirname + '/static/Ps', {
	maxAge: 86400000
}))

app.listen(8000, function(err) { 
	console. log('Server is running on port 8000')
})