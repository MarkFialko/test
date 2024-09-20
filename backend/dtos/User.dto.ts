export interface UserDto {
    id: number,
    full_name: string,
    role: string,
    efficiency: number,
}

export interface CreateUserDto extends Omit<UserDto, "id"> {
}
