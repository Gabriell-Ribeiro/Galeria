const Sequelize = require("sequelize")
const connection = new Sequelize("galeria", "root", "zasdw", {
    host: "localhost",
    dialect: "mysql",
    timezone: "-03:00"
})

module.exports = connection