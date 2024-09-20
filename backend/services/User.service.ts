import {Request, Response} from "express";
import {CreateUserDto, UserDto} from "../dtos/User.dto";
import {User as UserModel} from "../models/User.model";

class UserService {
    async create(payload: CreateUserDto): Promise<UserDto> {
        return await UserModel.create(payload);
    }

    async getOne(user_id: number, filters: Record<(keyof Omit<UserDto,'id'>), undefined>): Promise<UserDto | null> {
        return await UserModel.findOne({
            where: {
                id: user_id,
                ...filters
            }
        })
    }

    async getAll(filters: Record<(keyof UserDto), undefined>): Promise<UserDto[]> {
        return await UserModel.findAll({
            where: {
                ...filters
            }
        })
    }

    async update(user_id:number, updates: Partial<CreateUserDto>): Promise<UserDto | null> {
        const user = await UserModel.findOne({where: {
            id: user_id
            }})

        if (user) {
            await user.update(updates)
        }

        return user

    }

    async deleteOne(user_id: number): Promise<UserDto | null> {
        const user = await UserModel.findOne({where: {id: user_id}})
        if (user) {
            await user.destroy()
        }

        return user
    }

    async deleteAll(): Promise<void> {
        await UserModel.truncate()
    }
}

export default new UserService();
