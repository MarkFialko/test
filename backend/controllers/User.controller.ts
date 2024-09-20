import {Request, Response} from 'express';
import {CreateUserDto, UserDto} from "../dtos/User.dto";
import UserService from "../services/User.service";
import {AppResponse} from "../types/api.types";
import {stripUndefined} from "../utils/utils";

class UserController {
    async create(request: Request, response: AppResponse<Pick<UserDto, 'id'> | null>) {

        const payload: CreateUserDto = request.body
        try {

            const user = await UserService.create(payload)

            return response.json(
                {
                    success: true,
                    result: {
                        id: user.id,
                    }
                }
            )
        } catch (e) {
            return response.json({
                success: false,
                result: null
            })
        }

    }

    async get(request: Request, response: AppResponse<UserDto | UserDto[] | null>) {
        const query = request.query as Record<(keyof UserDto), undefined>
        const user_id = Number(request.params.user_id)

        if (!user_id) {
            const users = await UserService.getAll(stripUndefined(query))

            return response.json({
                success: !!users.length,
                result: users
            })

        }

        const user = await UserService.getOne(user_id, stripUndefined(query))

        return response.json({
            success: !!user,
            result: user
        })

    }

    async update(request: Request,  response: AppResponse<UserDto | null>) {

        try {

            const payload: Partial<CreateUserDto> = request.body
            const user_id = Number(request.params.user_id)


            const updatedUser = await UserService.update(user_id, payload)

            return response.json({
                success: !!updatedUser,
                result: updatedUser
            })
        } catch (e) {
            return response.json({
                success: false,
                result: null
            })
        }

    }

    async delete(request: Request,  response: AppResponse<UserDto | null>) {
        const user_id = Number(request.params.user_id)

        if (user_id) {
            const user = await UserService.deleteOne(user_id)

            return response.json({
                success: true,
                result: user
            })
        }

        await UserService.deleteAll()

        return response.json({
            success: true,
        })
    }
}

export default new UserController();
