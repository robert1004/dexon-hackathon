let routes = require('express').Router()

module.exports = function(web3) {

    let contract = new web3.eth.Contract([
        {
            "constant": false,
            "inputs": [],
            "name": "update",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "get",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ], '0xa85bf314E0AEeC2bfe01A92c40a4eA7d963eBADD')

    routes.get('/value', (req, res) => {
        contract.methods.get().call().then(
        (result) => {
            console.log(result)
            res.json({value: result})
        }, (err) => {
            console.log(err)
            res.status(400).json({error: err.stack})
        })
    })

    return routes
}