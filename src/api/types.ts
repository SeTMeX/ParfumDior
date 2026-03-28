export interface RegisterDto{
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber: string,
}

export interface RegisterResponse{
    accessToken: string,
    refreshToken: string
}

export type LoginDto = Pick<RegisterDto, 'email' | 'password'>

export interface UserDto {
    id: string,
    createdAt: string,
    updatedAt: string,
    deletedAt: string,
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    phoneNumber: string,
    role: string
}

export type UpdateUserDto = Pick<UserDto, 'firstName' | 'lastName' | 'phoneNumber'>