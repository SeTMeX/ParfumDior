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