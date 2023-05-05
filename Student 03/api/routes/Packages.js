import express  from "express";
import Packages  from "../models/Packages.js";

const router = express.Router();

//Create
router.post("/", async (req,res)=>{
    const newPackages = new Packages(req.body)

    try{
        const savePackages = await newPackages.save()
        res.status(200).json(savePackages)
    }catch(err){
        res.status(500).json(err)
    }
})
//Delete
router.delete("/:id", async (req,res)=>{
    try{
        await Packages.findByIdAndDelete
        (req.params.id);
        res.status(200).json("Packages Deleted");
    }catch(err){
        res.status(500).json(err)
    }
})
//Get
router.get("/:id", async (req,res)=>{
    try{
        const hotel = await Packages.findById
        (req.params.id);
        res.status(200).json(hotel);
    }catch(err){
        res.status(500).json(err)
    }
})
//Get ALL
router.get("/", async (req,res)=>{
    try{
        const hotels = await Packages.find
        (req.params.id);
        res.status(200).json(hotels);
    }catch(err){
        res.status(500).json(err)
    }
})

//Count by name
router.get("/find/countByName", async (req,res)=>{
    const names = req.query.names.split(',');
    try{
        const list = await Promise.all(names.map(name=>{
            return Hotel.countDocuments({name:name})
        }))
        res.status(200).json(list);
    }catch(err){
        res.status(500).json(err)
    }
})

export default router