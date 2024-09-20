"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_controller_1 = __importDefault(require("../controllers/User.controller"));
const userRouter = (0, express_1.default)();
userRouter.post('/create', User_controller_1.default.create);
userRouter.get('/get/:user_id', User_controller_1.default.get);
userRouter.get('/get/', User_controller_1.default.get);
userRouter.patch('/update/:user_id', User_controller_1.default.update);
userRouter.delete('/:user_id', User_controller_1.default.delete);
userRouter.delete('', User_controller_1.default.delete);
exports.default = userRouter;
