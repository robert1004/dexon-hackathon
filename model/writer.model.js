module.exports = (sequelize, Sequelize) => {
    const Writer = sequelize.define('writer', {
        title: {
            type: Sequelize.STRING
        },
        author: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        language: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.FLOAT
        },
        address: {
            type: Sequelize.CHAR
        },
        preview: {
            type: Sequelize.STRING
        },
        book: {
            type: Sequelize.STRING
        },
        bookcover: {
            type: Sequelize.STRING
        }
    });

    return Writer;
}