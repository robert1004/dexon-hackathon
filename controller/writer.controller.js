const db = require('../config/db.config.js').db;
const Writer = db.writers;

exports.create = (req, res) => {
    Writer.create({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        language: req.body.language,
        type: req.body.type,
        price: req.body.price,
        address: req.body.address,
        preview: req.body.preview,
        book: req.body.book,
        bookcover: req.body.bookcover
    }).then(writer => {
        res.status(200).send(writer);
    }).catch(function(error){
        console.log(error);
    });
};

exports.findAll = (req, res) => {
    Writer.findAll().then(writers => {
        res.status(200).send(writers);
    }).catch(function(error){
        console.log(error);
    });
};

exports.findAllType = (req, res) => {
    Writer.findAll({
        where: { type: req.body.type }
    }).then(writers => {
        res.status(200).send(writers);
    }).catch(function(error){
        console.log(error);
    });
};

exports.findById = (req, res) => {	
	Writer.findById(req.params.writerId).then(writer => {
		res.status(200).send(writer);
	}).catch(function(error){
        console.log(error);
    });
};

exports.findByName = (req, res) => {
    Writer.findAll({
        where: ["title like ?", '%' + res.body.title + '%']
    }).then(writers => {
        res.status(200).send(writers);
    }).catch(function(error){
        console.log(error);
    });
};