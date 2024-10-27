import express from "express"
import { adminLogin, adminLogout, createAdmins, deleteAdmin, getAdminById, getAllAdmins, updateAdmin } from "../controllers/adminControllers.js"
import { authAdmin } from "../middleware/authAdmin.js"
const router=express.Router()

router.post('/admins',createAdmins)

router.post('/admins/log-in',adminLogin)

router.get('/admins',authAdmin,getAllAdmins)

router.get('/admins/:id',authAdmin, getAdminById)

router.put('/admins/:id',authAdmin, updateAdmin)

router.delete('/admins/:id',authAdmin, deleteAdmin)

router.post('/admins/logout',authAdmin,adminLogout)

export {router as adminRouter}