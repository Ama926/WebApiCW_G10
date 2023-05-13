import express from "express";
import {createReservation
} from "../controllers/reserve.js";

const router = express.Router();

router.post("/", createReservation)

export default router
