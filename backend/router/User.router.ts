import Router from "express";
import UserController from "../controllers/User.controller";


const userRouter = Router()

userRouter.post('/create', UserController.create);
userRouter.get('/get/:user_id', UserController.get)
userRouter.get('/get/', UserController.get)
userRouter.patch('/update/:user_id', UserController.update)
userRouter.delete('/delete', UserController.delete)
userRouter.delete('/delete/:user_id', UserController.delete)


export default userRouter
