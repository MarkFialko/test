import Router from "express";
import UserController from "../controllers/User.controller";


const userRouter = Router()

userRouter.post('/create', UserController.create);
userRouter.get('/get/:user_id', UserController.get)
userRouter.get('/get/', UserController.get)
userRouter.patch('/update/:user_id', UserController.update)
userRouter.delete('/:user_id', UserController.delete)
userRouter.delete('', UserController.delete)


export default userRouter
