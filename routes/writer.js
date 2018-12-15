let routes = require('express').Router()

module.exports = function(web3) {
 
    const writers = require('../controller/writer.controller.js');
 
    // Create a new Customer
    routes.post('/api/books', writers.create);
 
    // Retrieve all Customer
    routes.get('/api/books/all', writers.findAll);
 
    // Retrieve a single Customer by Id
    routes.get('/api/books/type', writers.findAllType);
 
    // Retrieve a Customer with Id
    routes.get('/api/books/:writerId', writers.findById);

    // Retrieve a Customer with Id
    routes.get('/api/books/name', writers.findByName);
    

    return routes;
}