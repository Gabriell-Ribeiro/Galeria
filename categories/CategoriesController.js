const express = require("express")
const router = express.Router()
const Category = require("./Category")

router.get("/categories/new", (req, res) => {
    res.render("categories/new")
})

router.post("/categories/save", (req, res) => {
    var title = req.body.title
    if(title != undefined) {
        Category.create({
            title: title
        }).then(() => {
            res.redirect("/")
        })
    } else {
        res.redirect("/categories/new")
    }
})

module.exports = router