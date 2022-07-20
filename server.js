require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const sectionRoutes = require('./controller/section_routes')
const userRoutes = require('./controller/user_routes')
const commentRoutes = require('./controller/comment_routes')


const app = require('liquid-express-views')(express())


app.use(morgan('tiny'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
const session = require('express-session')
const MongoStore = require('connect-mongo')

app.use(
	session({
		secret: process.env.SECRET,
		store: MongoStore.create({
			mongoUrl: process.env.DATABASE_URI
		}),
		saveUninitialized: true,
		resave: false
	})
)

app.use('/section', sectionRoutes)
app.use('/users', userRoutes)
app.use('/comments', commentRoutes)

// localhost:3000/
app.get('/', (req, res) => {
	res.redirect('/section')
})

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`app is listening on port: ${PORT}`)
})