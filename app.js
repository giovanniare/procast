const express = require('express')
const hbs = require('hbs')

require('./hbs/helpers')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerPartials(__dirname + '/views/partials_new')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('home', {
        imageHeader: '../../assets/img/masthead.jpg',
        tittle: 'PROCAST'
    })
})

app.get('/desarrollos', (req, res) => {
    res.render('desarrollos', {
        imageHeader: '../../assets/img/desarrollo.jpg',
        tittle: 'DESARROLLOS',
        descripcion: 'En Procast la Arquitectura es un todo, por esto en nuestro proceso entendemos la visión de 360 grados con arquitectos, estructurístas, financieros, constructores, diseñadores industriales y gráficos los cuales agregan valor y garantizan la ejecución de un proyecto integral.'
    })
})

app.get('/propiedades', (req, res) => {
    res.render('propiedades', {
        imageHeader: '../../assets/img/propiedades.jpg',
        tittle: 'PROPIEDADES',
        descripcion: 'Da un vistazo a nuestro catalogo de propiedades listas para ti.'
    })
})

app.get('/blog', (req, res) => {
    res.render('blog', {
        imageHeader: '../../assets/img/blog.jpg',
        tittle: 'PROXIMAMENTE',
        descripcion: 'Espera nuestro nuevo blog, aqui oodras aprender sobre las tendencias y mejores practicas sobre real estate.'
    })
})

// DESAROLLOS

app.get('/desarrollos/casa-kh', (req, res) => {
    res.render('desarrollos')
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
})