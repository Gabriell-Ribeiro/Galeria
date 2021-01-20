const express = require("express")
const router = express.Router()
const Image = require("./Image")

const Category = require("../categories/Category")

router.get("/image/new", (req, res) => {
    Category.findAll().then(category => {
        res.render("image/index", { category })
    })
})

router.post("/image/save", (req, res) => {
    var url = req.body.url
    var category = req.body.category
    console.log(category)
    if(url != undefined) {
        Image.create({
            url,
            categoryId: category // Aqui faz referência ao id da categoria relaciona
        }).then(() => {
            res.redirect("/")
        })
    } else {
        res.redirect("/image/new")
    }
})

module.exports = router