let routes = require('express').Router()
const DexonDecimal = 10e17

module.exports = function(web3) {

    routes.get('/gas/price', (req, res) => {
        web3.eth.getGasPrice().then(
        (result) => {
            console.log(result)
            res.json({gasPrice: result/DexonDecimal})
        }, (err) => {
            console.log(err)
            res.status(400).json({error: err.stack})
        })
    })

    routes.get('/tx/:tx', (req, res) => {
        let tx = req.params.tx
        web3.eth.getTransaction(tx).then(
        (result) => {
            console.log(result)
            res.json(result)
        }, (err) => {
            console.log(err)
            res.status(400).json({error: err.stack})
        })
    })

    routes.get('/tx/:tx/receipt', (req, res) => {
        let tx = req.params.tx
        web3.eth.getTransactionReceipt(tx).then(
        (result) => {
            console.log(result)
            res.json(result)
        }, (err) => {
            console.log(err)
            res.status(400).json({error: err.stack})
        })
    })

    routes.get('/:address/balance', (req, res) => {
        let address = req.params.address
        web3.eth.getBalance(address).then(
        (result) => {
            console.log(result)
            res.json({balance: result/DexonDecimal})
        }, (err) => {
            console.log(err)
            res.status(400).json({error: err.stack})
        })
    })

    return routes
}