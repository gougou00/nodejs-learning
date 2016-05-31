var express = require('express')
var path = require('path')
var mongoose = require('mongoose')
var session = require('express-session')
var mongoStore = require('connect-mongo')(session)

var cookieParser = require('cookie-parser')
var cookieSession = require('cookie-session')

var bodyParser = require('body-parser');
var port = process.env.PORT || 3000
var app = express()
var dbUrl = 'mongodb://localhost/gotosee'
var logger = require('morgan')

mongoose.connect(dbUrl)

app.set('views', './app/views/pages')
app.set('view engine', 'jade')
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(session({
	secret: 'gotosee',
	//resave: false,
	//saveUninitialized: false,
	store: new mongoStore({
		url: dbUrl,
		collection: 'sessions'
	})
}))
// app.use(express.cookieParser())
// app.use(express.session({
// 	secret: 'gotosee'
// }))

if ('development' === app.get('env')) {
	app.set('showStackError', true)
	app.use(logger(':method :url :status'))
	
	app.locals.pretty = true
	mongoose.set('debug', true)
}

require('./config/routes')(app)

app.use(express.static(path.join(__dirname, 'public')))
app.locals.moment = require('moment')
app.listen(port)

console.log('gotosee started on port ' + port)
