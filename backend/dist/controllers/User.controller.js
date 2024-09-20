"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_service_1 = __importDefault(require("../services/User.service"));
const utils_1 = require("../utils/utils");
class UserController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = request.body;
            try {
                const user = yield User_service_1.default.create(payload);
                return response.json({
                    success: true,
                    result: {
                        id: user.id,
                    }
                });
            }
            catch (e) {
                return response.json({
                    success: false,
                    result: null
                });
            }
        });
    }
    get(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = request.query;
            const user_id = Number(request.params.user_id);
            if (!user_id) {
                const users = yield User_service_1.default.getAll((0, utils_1.stripUndefined)(query));
                return response.json({
                    success: !!users.length,
                    result: users
                });
            }
            const user = yield User_service_1.default.getOne(user_id, (0, utils_1.stripUndefined)(query));
            return response.json({
                success: !!user,
                result: user
            });
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = request.body;
                const user_id = Number(request.params.user_id);
                const updatedUser = yield User_service_1.default.update(user_id, payload);
                return response.json({
                    success: !!updatedUser,
                    result: updatedUser
                });
            }
            catch (e) {
                return response.json({
                    success: false,
                    result: null
                });
            }
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = Number(request.params.user_id);
            if (user_id) {
                const user = yield User_service_1.default.deleteOne(user_id);
                return response.json({
                    success: true,
                    result: user
                });
            }
            yield User_service_1.default.deleteAll();
            return response.json({
                success: true,
            });
        });
    }
}
exports.default = new UserController();
