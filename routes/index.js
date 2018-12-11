let routes = require('express').Router()
const basic = require('./basic')
const contract = require('./contract')

module.exports = function(web3) {

    routes.use('/', basic(web3))
    routes.use('/', contract(web3))

    return routes
}