const express = require('express')

const app = express()

app.listen("3000")

//middleware
app.use(express.json())


// app.route('/').get((req, res) => res.send('Hello!'))
// app.route('/sobre').get((req, res) => res.send('Hello sobre!'))
// app.route('/contato').get((req, res) => res.send('Hello contato!'))

app.route('/').post((req, res) => res.send(req.body))