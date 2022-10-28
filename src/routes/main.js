const express=require("express")
const {route}=require('express/lib/application')
const Detail=require("../models/Detail")
const Slider = require("../models/Slider")
const routes=express.Router()

routes.get("/", async (req, res)=>{
    const details=await Detail.findOne({"_id":"6354745b34c09368552ed071"})
    const slides=await Slider.find()
    res.render("index", {
        details: details,
        slides: slides
    })
})

routes.get("/gallery", async (req, res)=>{
    const details=await Detail.findOne({"_id":"6354745b34c09368552ed071"})
    res.render("gallery", {
        details: details
    })
})

module.exports=routes