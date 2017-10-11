const express = require('express')
const { twig } = require('twig') 

const app = express() //run function express

app.set('view engine', 'twig')


const newsController = require('./controllers/news.controller')
const aboutusController = require('./controllers/aboutus.controller')


app.get('/news', newsController.index)
app.get('/aboutus', aboutusController.index)



app.use('/assets', express.static(__dirname + '/static/assets', {
	maxAge: 86400000
}))

app.listen(8000, function(err) { 
	console. log('Server is running on port 8000')
})