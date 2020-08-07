import express from 'express'
import next from "next"
import Mongo from "./db"

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


const jwtSecret = process.env.JWT_SECRET || "SuperSecret"
const connectionString = process.env.DB_STRING || "mongodb://localhost:27017/weird"


export type CustomRequest = express.Request & {
	mongo: typeof Mongo
	jwtSecret: string
}

app.prepare().then(async () => {
	const server = express()
	
	await Mongo.ConnectAsync(connectionString)

	server.all('*', (req , res) => {
		const customReq = req as CustomRequest
		customReq.mongo = Mongo
		customReq.jwtSecret = jwtSecret
		return handle(customReq, res)
	})

	server.listen(port, () => {
		console.log(`> Ready on http://localhost:${port}`)
	})
})

export default app