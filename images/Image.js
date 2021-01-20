const { Model } = require("sequelize")
const Sequelize = require("sequelize")
const connection = require("../database/db")

const Category = require("../categories/Category")

const Image = connection.define("images", {
    url: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Image) // Uma categoria tem muitas imagens - 1 para Muitos
Image.belongsTo(Category) // Uma image pertence a uma categoria - 1 para 1

// Image.sync({force: false})

module.exports = Image