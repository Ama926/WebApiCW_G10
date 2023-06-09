import User from "../models/Users.js";


//update
export const updateUser = async (req, res, next)=>{
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true})
        res.status(200).json(updateUser)
    }catch(err){
        //res.status(500).json(err)
        next(err)
    }

}

//delete
export const deleteUser = async (req, res, next)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted")
    }catch(err){
        //res.status(500).json(err)
        next(err)
    }

}

//get
export const getUser = async (req, res, next)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(User)
    }catch(err){
        //res.status(500).json(err)
        next(err)
    }

}

//get all
export const getAllUser = async (req, res, next)=>{
    try{
        const users = await User.find();
        res.status(200).json(users)
    }catch(err){
        //res.status(500).json(err)
        next(err)
    }

}