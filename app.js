const express = require('express')
const hbs = require('hbs')
const nodemailer = require('nodemailer')

require('./hbs/helpers')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerPartials(__dirname + '/views/partials_new')
app.set('view engine', 'hbs')

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
        descripcion: 'En Procast la Arquitectura es un todo',
        imgTitulo: 'Desarrollos.png'
    })
})

app.get('/propiedades', (req, res) => {
    res.render('propiedades', {
        imageHeader: 'pro',
        titulo: 'PROPIEDADES',
        descripcion: 'Da un vistazo a nuestro catalogo de propiedades',
        imgTitulo: 'Propi.png'
    })
})

app.get('/decoraciones', (req, res) => {
    res.render('decoraciones', {
        imageHeader: 'decoraciones',
        titulo: 'DECORACIONES',
        descripcion: '"Espacio es el respiro del Arte"',
        autor: '- Frank Lloyd Wright -',
        imgTitulo: 'Deco.png'
    })
})

app.get('/servicios', (req, res) => {
    res.render('servicios', {
        imageHeader: 'servicios',
        titulo: 'SERVICIOS',
        descripcion: 'En Procast ofrecemos servicios integrales',
        imgTitulo: 'Servicios.png'
    })
})

app.get('/blog', (req, res) => {
    res.render('blog', {
        imageHeader: 'blog',
        titulo: 'PROXIMAMENTE',
        descripcion: 'Espera nuestro nuevo blog, aqui podras aprender sobre las tendencias y mejores practicas sobre real estate',
        imgTitulo: 'proxi.png'
    })
})

app.post('/contacto', (req, res) => {

    async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        //let testAccount = await nodemailer.createTestAccount();


        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: "Godaddy",
            secureConnection: true,
            //port: 587,
            //secure: false, // true for 465, false for other ports
            auth: {
                user: 'contacto@procast-re.com', // generated ethereal user
                pass: 'Contactodiana18', // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: 'contacto@procast-re.com', // sender address
            to: req.body.email, // list of receivers
            subject: "PROCAST REAL STATE", // Subject line
            text: `Que tal ${req.body.name}, ¡Gracias por tu interes! En poco tiempo uno de nuestros ejecutivos se pondra en contacto contigo para brindarte una atención personalizada. Whatsapp: 55 44 48 92 78 <br><br>Redes sociales IG: https://www.instagram.com/procastrealestate/ FB: https://www.facebook.com/ProcastRealEstate/ LD: https://mx.linkedin.com/in/israel-castelan`, // plain text body
            html: `Que tal ${req.body.name},<br> ¡Gracias por tu interes! En poco tiempo uno de nuestros ejecutivos se pondra en contacto contigo para brindarte una atención personalizada . <br><br>Whatsapp: 55 44 48 92 78 <br><br>Redes sociales <br>IG: https://www.instagram.com/procastrealestate/ <br>FB: https://www.facebook.com/ProcastRealEstate/ <br>LD: https://mx.linkedin.com/in/israel-castelan`, // html body
        });

        let procast = await transporter.sendMail({
            from: 'contacto@procast-re.com', // sender address
            to: 'contacto@procast-re.com, castelan@procast-re.com', // list of receivers
            subject: "PROCAST REAL STATE", // Subject line
            text: `TEAM. \n\n El cliente ${req.body.name} ha solicitado informacion sobre ${req.body.desde}, por favor ponte en contacto con el, su email: ${req.body.email} y su numero: ${req.body.phone} \n\n Y estos son los comentarios: ${req.body.comentarios}`, // plain text body
            html: `TEAM. <br> El cliente ${req.body.name} ha solicitado informacion sobre ${req.body.desde}, por favor ponte en contacto con el, su email: ${req.body.email} y su numero: ${req.body.phone} <br><br> Y estos son los comentarios: ${req.body.comentarios}`, // html body
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Message sent: %s", procast.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(procast));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);


    res.render('contacto', {
        imageHeader: 'des',
        titulo: 'CONTACTO',
        descripcion: 'Gracias por ponerte en contacto con nosotros, enseguida nos pondremos en contacto contigo.',
        imgTitulo: 'titulo_blanco.png',
        boton: '<a class="btn btn-primary" href="/#page-top">Regresar</a>'
    })

})

app.post('/test', (req, res) => {

    //console.log(`user: ${req.body.name} email: ${req.body.email}`)

    res.json({
        nombre: req.body.name,
        type: req.body.email
    })

})

// DESAROLLOS

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
})