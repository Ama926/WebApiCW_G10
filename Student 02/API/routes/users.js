import express from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.js";
import { verifyToken, verifyUser,verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//update - new
router.put("/:id",verifyUser, updateUser);

//delete - new
router.delete("/:id",verifyUser, deleteUser);

//get - new
router.get("/:id",verifyUser, getUser);

//get all - new
router.get("/",verifyAdmin, getAllUser);


export default router