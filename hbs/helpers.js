const hbs = require('hbs')

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('getHeader', (info) => {
    return info
})

hbs.registerHelper('getValue', () => {
    return '6LeCiyEdAAAAAEMHM-OuwgSfDUaY4cnRY2Me5FAg'
})