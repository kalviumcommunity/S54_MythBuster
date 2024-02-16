import express from "express"
import {signup,login,logout, findUser} from "../controllers/authController.js"

const router = express.Router()


router.post("/signup",signup)
router.post("/login",login)
router.get("/",findUser)

router.post("/logout",logout)

export default router
