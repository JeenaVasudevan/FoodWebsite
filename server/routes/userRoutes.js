
import express from "express"
import { checkUser, create, login, userLogout, userProfile, userUpdate } from "../controllers/userControllers.js"
import { authUser } from "../middleware/authUser.js"

const router=express.Router()

router.post("/sign-up",create)

router.post("/log-in",login)

router.get("/profile",authUser,userProfile)

router.post("/log-out",authUser,userLogout)

router.put("/profile-update/:id",authUser,userUpdate)

router.get("/check-user",authUser,checkUser)

export {router as userRouter}