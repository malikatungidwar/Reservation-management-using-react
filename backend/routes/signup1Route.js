import express from "express";
import { sendSignup1 } from "../controller/signup1.js";


const router = express.Router();


router.post("/send", sendSignup1);

export default router;
