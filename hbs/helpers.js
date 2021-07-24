const hbs = require('hbs')

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('getHeader', (info) => {
    return info
})