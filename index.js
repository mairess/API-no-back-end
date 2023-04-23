const express = require('express')

const app = express()

app.listen("3000")

let author = 'Maires'

app.route('/:identificador').delete((req,res)=> {
    res.send(req.params.identificador)
})

//middleware
// app.use(express.json())

// let author = 'Maires'



// app.route('/').get((req, res) => res.send(author))




// app.route('/').get((req, res) => res.send('Hello!'))
// app.route('/sobre').get((req, res) => res.send('Hello sobre!'))
// app.route('/contato').get((req, res) => res.send('Hello contato!'))

// app.route('/').post((req, res) => res.send(req.body))

// app.route('/').put((req, res) => {
//     author = req.body.author
//     res.send(author)
// })


