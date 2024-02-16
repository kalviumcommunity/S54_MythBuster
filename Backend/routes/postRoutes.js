import express from "express"
import {getMythData,findMythById,addMyth,updateMythById,deleteMythById} from "../controllers/postController.js"

const router = express.Router()


router.get("/",getMythData)
router.get("/:id",findMythById)
router.post("/",addMyth)
router.put("/:id",updateMythById)
router.delete("/:id",deleteMythById)


export default router