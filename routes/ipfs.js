let routes = require('express').Router()
const ipfsAPI = require('ipfs-http-client')
const fs = require('fs')
const DexonDecimal = 10e17
const ipfs = ipfsAPI('bookdemo.hopto.org', '5001', {protocol: 'http'})

module.exports = function(web3) {

    routes.get('/file', (req, res) => {
        ipfs.addFromURL('https://www.google.com/', function (err, file) {
            if (err) {
              throw err
            }

            console.log(file)
            res.json(file)
        })
    })

    routes.get('/files', (req, res) => {
        ipfs.get('Qmck3HJQ6BDWhBWUJbkzKJmGAroJdaPJjWZfQ7XCpVBmVc', function (err, files) {
            files.forEach((file) => {
              console.log(file.path)
              console.log(file.content.toString('utf8'))
              res.send(file.content.toString('utf8'))
            })
          })
    })

    return routes
}