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
Object.defineProperty(exports, "__esModule", { value: true });
const User_model_1 = require("../models/User.model");
class UserService {
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_model_1.User.create(payload);
        });
    }
    getOne(user_id, filters) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_model_1.User.findOne({
                where: Object.assign({ id: user_id }, filters)
            });
        });
    }
    getAll(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_model_1.User.findAll({
                where: Object.assign({}, filters)
            });
        });
    }
    update(user_id, updates) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_model_1.User.findOne({ where: {
                    id: user_id
                } });
            if (user) {
                yield user.update(updates);
            }
            return user;
        });
    }
    deleteOne(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_model_1.User.findOne({ where: { id: user_id } });
            if (user) {
                yield user.destroy();
            }
            return user;
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield User_model_1.User.truncate();
        });
    }
}
exports.default = new UserService();
