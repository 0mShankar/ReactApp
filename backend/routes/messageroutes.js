import express from 'express'
import { getMessage, sendMessage } from '../controller/messagecontroller.js';
import protectRoute from '../middleware/protectRoute.js'
const router=express.Router();


// :id user 
router.get("/:id",protectRoute,getMessage);
router.post("/send/:id",protectRoute,sendMessage);






export default router;