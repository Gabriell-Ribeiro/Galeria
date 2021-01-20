const Sequelize = require("sequelize")
const connection = require("../database/db")

const Category = connection.define("categories", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// Category.sync({force: false})

module.exports = Category