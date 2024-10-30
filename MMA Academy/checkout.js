
const button = document.querySelector("button")
button.addEventListener("click", () => {
    fetch("http://localhost:5500/create-checkout-session", {
        method:"POST"
    })
    .then(res => res.json())
    .then(({ url }) => {
        window.location = url
    })
    .catch(e => {
        console.error(e.error)
    })
}) 
























/* alternative test code delete if new one is sucsefful
 require('dotenv').config()
const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.getMaxListeners('/', (req, res) => {
    res.render('index.ejs')

})

app.listen(3000, () => console.log('Server started on port 3000')) */