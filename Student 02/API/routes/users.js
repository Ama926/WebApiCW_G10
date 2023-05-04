import express from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.js";
import { verifyToken, verifyUser,verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();


// router.get("/checkauthentication", verifyToken, (req, res, next)=>{
//     res.send("hello user, you are successfully logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
//     res.send("hello user, you are successfully logged in and you can delete your account")
// })


// //check admin access
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
//     res.send("hello admin, you are successfully logged in and you can delete all account")
// })


//update - new
router.put("/:id",verifyUser, updateUser);

//delete - new
router.delete("/:id",verifyUser, deleteUser);

//get - new
router.get("/:id",verifyUser, getUser);

//get all - new
router.get("/",verifyAdmin, getAllUser);


export default router