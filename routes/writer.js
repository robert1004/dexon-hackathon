let routes = require('express').Router()

module.exports = function() {
 
    const writers = require('../controller/writer.controller.js');
 
    // Create a new Customer
    routes.post('/books', writers.create);
 
    // Retrieve all Customer
    routes.get('/books/all', writers.findAll);
 
    // Retrieve a single Customer by Id
    routes.get('/books/type', writers.findAllType);

    // Retrieve a Customer with Id
    routes.get('/books/search', writers.searchName);
 
    // Retrieve a Customer with Id
    routes.get('/books/:writerId', writers.findById);

    return routes;
}