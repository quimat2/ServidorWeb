const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.use(express.static(__dirname + '/public'))

// Motor de Plantillas o Vistas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
    res.render('index', {
        titulo: 'Index con EJS',
        parametro: 'Hola'
    })
})

app.get('/lenguajes', (req, res) => {
    res.send(__dirname + '/public/index.html')
})

app.listen(port, () => [
    console.log('Arranca el servidor', port),
    console.log(`Arranca el servidor ${port}`)
])