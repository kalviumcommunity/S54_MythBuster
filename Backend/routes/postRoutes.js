import express from "express"
import {getMythData,findMythById,addMyth,updateMythById,deleteMythById} from "../controllers/postController.js"

const router = express.Router()


router.get("/myths",getMythData)
router.get("/myths/:id",findMythById)
router.post("/myths",addMyth)
router.post("/myths/:id",updateMythById)
router.delete("/myths/:id",deleteMythById)


export default router