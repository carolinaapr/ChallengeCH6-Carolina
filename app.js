const { Router } = require("express")
const express = require("express")
const app = express()
const port = 3000
const path = require('path')
const gamehistory = require('./router/usergamelist')


//home route atau halaman login pertama
app.set('view engine','ejs')

//memanggil homepage awal
app.get('/', (req,res) =>{
    res.render('base',{title: "Game Administrator Login System"})
})

//memanggil biodata user
app.get('/usergamelist',() => (req,res,next) => {
    res.json({'tabel biodata'});
    next()
})



app.listen(port,()=> {console.log(`Aplikasi ini berjalan pada port ${port}`)})

 