const express=require('express')
const hbs=require('hbs')
const app=express()
const mongoose=require('mongoose')
const routes=require('./routes/main')
const Detail=require("./models/Detail")
const Slider=require("./models/Slider")
const Service=require("./models/Service")

app.use('/static', express.static("public"))
app.use('', routes)

app.set('view engine','hbs')
app.set('views', 'views')
hbs.registerPartials("views/partials")

mongoose.connect("mongodb://localhost/website_dynamic", ()=>{
    console.log("db connected")
})

app.listen(process.env.PORT | 5556, ()=>{
    console.log("server started");
});



