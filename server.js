const express = require('express')
const compression = require('compression')

const PORT = process.env.PORT || 8080

const app = express()

app.use(compression())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes/html-routes')(app)

app.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
})