import * as express from "express"
import * as path from "path"

const app = express()

app.use(express.static(path.join(__dirname, "..", 'web/build')))

app.get('/api', (req,res) => {
	res.end("yes")
})

app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname, "..", 'web/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log('Listening on ' + port)
