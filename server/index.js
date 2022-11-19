'use strict'
const cors = require('cors')
const fileUpload = require('express-fileupload')
const express = require('express')
const expressValidator = require('express-validator')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const path = require('path')
require('dotenv').config()
// ==== Middlewares ====
const ErrorMiddleware = require('./middleware/ErrorMiddleware.js')
// ==== Routers ====
const userRouter = require('./routers/index.js')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(fileUpload({}))

app.use(
	cors({
		origin: process.env.CLIENT_URL,
		credentials: true, //access-control-allow-credentials: true
		optionSuccessStatus: 200,
		credentials: true, // accept cookie
	})
)

// ==== Routers ====
app.use('/api', userRouter)
// ==== Errors middleware ====
app.use(ErrorMiddleware)

// ==== Start App // Connect DB // info for start app ====

const PORT = process.env.PORT || 5000
const HOST = process.env.HOST

const startApp = async () => {
	try {
		await mongoose.connect(process.env.DB_URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		})
		await app.listen(PORT, HOST, () => {
			console.log(`Server is working http://${HOST}:${PORT}`)
		})
	} catch (err) {
		console.log(err)
	}
}

startApp()

/*
	API: 
		// AUTH	
			POST - HOST/api/registration { username: string, password: string, picture?: file }
			POST - HOST/api/login { username: string, password: string }; /// return JWT
			POST - HOST/api/logout { username?: string, password?: string, picture?: string }
		// USER
			POST - HOST/api/update { username?: string, password?: string, picture?: string }
*/
