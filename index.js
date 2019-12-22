const express = require("express")
const helmet = require("helmet")
const carsRouter = require("./routers/cars")

const server = express()
const host = process.env.HOST || "localhost"
const port = process.env.PORT || 8080

server.use(helmet())
server.use(express.json())

server.use("/api/cars", carsRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Internal Server Error",
	})
})

server.listen(port, host, () => {
	console.log(`\nRunning on http://${host}:${port}\n`)
})
