const express=require("express")
const {route}=require('express/lib/application')
const Detail=require("../models/Detail")
const Slider =require("../models/Slider")
const Service=require("../models/Service")

const routes=express.Router()

routes.get("/", async (req, res)=>{
    const details=await Detail.findOne({"_id":"6354745b34c09368552ed071"})
    const slides=await Slider.find()
    const services=await Service.find()
    res.render("index", {
        details: details,
        slides: slides,
        services: services
    })
})

routes.get("/gallery", async (req, res)=>{
    const details=await Detail.findOne({"_id":"6354745b34c09368552ed071"})
    res.render("gallery", {
        details: details
    })
})

module.exports=routes