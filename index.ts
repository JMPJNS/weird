const express = require("express")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('/api', (req: any,res: any) => {
	res.end("yes")
})

app.get('*', (req: any,res: any) =>{
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log('Listening on ' + port)
