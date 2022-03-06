const express = require("express")
const app = express()
const port = 3000

//home route
app.set('view engine','ejs')

//homepage awal
app.get('/', (req,res) =>{
    res.render('base',{title: "Game Administrator Login System"})
})

app.listen(port,()=> {console.log(`Aplikasi ini berjalan pada port ${port}`)})

 