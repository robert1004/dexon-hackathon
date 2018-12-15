let routes = require('express').Router()
const basic = require('./basic')
const contract = require('./contract')
const ipfs = require('./ipfs')
const writer = require('./writer');

module.exports = function(web3) {

    routes.use('/', basic(web3))
    routes.use('/', contract(web3))
    routes.use('/', ipfs(web3))
    routes.use('/', writer(web3))

    return routes
}