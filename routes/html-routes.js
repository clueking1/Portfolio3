const path = require('path')

module.exports = function(app) {
    app.get('/', (_, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    })

    app.get('/port', (_, res) => {
        res.sendFile(path.join(__dirname, '../public/portfolio.html'))
    })

    app.get('/contact', (_, res) => {
        res.sendFile(path.join(__dirname, '../public/contact.html'))
    })

}