const express = require("express")
const path = require("path")
const app = express()
const publicPath = path.join(__dirname, "/public/dist" )
app.use(express.static(path.join(__dirname, "/public/dist" )))
app.get("*", (_, res) => {
    res.sendFile(path.join(publicPath, "index.html"))
})

app.listen(3000, () => console.log("Server up"))