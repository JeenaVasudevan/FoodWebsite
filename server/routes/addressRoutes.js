import express from 'express';
import { createAddress, deleteAddress, getAddressById, getAddresses, updateAddress } from '../controllers/addressControllers.js';
import { authAdmin } from "../middleware/authAdmin.js";
import { authUser } from "../middleware/authUser.js";
const router = express.Router();

router.post('/create',authUser,createAddress);

router.get('/address',authAdmin,getAddresses);

router.get('/address/:id',authAdmin,getAddressById);

router.put('/address/:id',authUser,updateAddress);

router.delete('/address/:id',authUser,deleteAddress);

export {router as addressRouter}
