const express=require("express")
const {route}=require('express/lib/application')
const Contact=require("../models/Contact")
const Detail=require("../models/Detail")
const Slider =require("../models/Slider")
const Service=require("../models/Service")
const { request, response } = require("express")

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

routes.post("/process-contact-form", async (request, response) => {
    console.log("form submitted")
    console.log(request.body)

    try{
        const data=Contact.create(request.body)
        console.log(data)
        response.redirect("/")
    } catch(e) {
        console.log(e)
        response.redirect("/")
    }
})

module.exports=routes