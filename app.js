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
        imageHeader: 'masthead.jpg',
        titulo: 'PROCAST'
    })
})

app.get('/desarrollos', (req, res) => {
    res.render('desarrollos', {
        imageHeader: 'des',
        titulo: 'DESARROLLOS',
        descripcion: 'En Procast la Arquitectura es un todo.',
        imgTitulo: 'Desarrollos.png'
    })
})

app.get('/propiedades', (req, res) => {
    res.render('propiedades', {
        imageHeader: 'pro',
        titulo: 'PROPIEDADES',
        descripcion: 'Da un vistazo a nuestro catalogo de propiedades listas para ti.',
        imgTitulo: 'Propi.png'
    })
})

app.get('/blog', (req, res) => {
    res.render('blog', {
        imageHeader: 'blog',
        titulo: 'PROXIMAMENTE',
        descripcion: 'Espera nuestro nuevo blog, aqui podras aprender sobre las tendencias y mejores practicas sobre real estate.',
        imgTitulo: 'proxi.png'
    })
})

// DESAROLLOS

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
})