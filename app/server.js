const express = require ('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Im creating node js express application'));


app.listen(port, () => console.log("Server Initiated"));