import express from "express"
import { userRouter } from "./userRoutes.js"
import { adminRouter } from "./adminRoutes.js"
import { foodRouter } from "./foodRoutes.js"
import { RestaurantsRouter } from "./restaurantRoutes.js"
import { cartRouter } from "./cartRoutes.js"
import { reviewRouter } from "./reviewRoutes.js"
import { orderRouter } from "./orderRoutes.js"
import { addressRouter } from "./addressRoutes.js"

const router=express.Router()

router.use('/user',userRouter)
router.use('/admin',adminRouter)
router.use('/restaurants',RestaurantsRouter)
router.use('/foods',foodRouter)
router.use('/carts',cartRouter)
router.use('/reviews',reviewRouter)
router.use('/orders',orderRouter)
router.use('/addresses',addressRouter)

export {router as apiRouter}