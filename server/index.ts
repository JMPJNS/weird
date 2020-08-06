import express from 'express'
import next from "next"

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

export type CustomRequest = express.Request & {
	test: string
}

app.prepare().then(() => {
	const server = express()

	server.all('*', (req , res) => {
		const customReq = req as CustomRequest
		customReq.test = "asdf"
		return handle(customReq, res)
	})

	server.listen(port, () => {
		console.log(`> Ready on http://localhost:${port}`)
	})
})

export default app