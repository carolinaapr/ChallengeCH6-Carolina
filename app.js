const express = require("express")
const app = express()
const port = 3000

app.use("/", function (req,res,next) {
    console.log("Time: ", Date())
    console.log("Request URL: ", req.originalUrl);
    console.log("Request Type: ", req.method);
    next();
});


app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)

app.get('/',(req,res) => res.send('Hello anjig!'))
app.listen(port, () =>  console.log(`App ini berjalan di port ${port}`))