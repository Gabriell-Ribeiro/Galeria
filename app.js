const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/db")

const categoriesController = require("./categories/CategoriesController")
const imageController = require("./images/ImageController")

const Category = require("./categories/Category")
const Image = require("./images/Image")

// View engine
app.set("view engine", "ejs")

// Static filer
app.use(express.static("public"))
// Body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Database
connection
.authenticate()
.then(() => {
    console.log("Database OK")
})
.catch((err) => {
    console.log(err)
})

app.use("/", categoriesController)
app.use("/", imageController)

// Route
app.get("/", (req, res) => {
    Category.findAll().then(category => {
        Image.findAll().then(image => {
            res.render("index", { category, image })
        })
    })
})

app.listen(3000)