const express = require("express")
const app = express()
const port = 3000
const usergamelist = require('./router/usergamelist')


//home route atau halaman login pertama
app.set('view engine','ejs')

//memanggil homepage awal
app.get('/', (req,res) =>{
    res.render('base',{title: "Game Administrator Login System"})
})



app.listen(port,()=> {console.log(`Aplikasi ini berjalan pada port ${port}`)})

 