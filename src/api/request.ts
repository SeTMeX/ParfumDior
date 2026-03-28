import api from './axios'
import type { LoginDto, RegisterDto, RegisterResponse, UserDto, UpdateUserDto } from './types';


export async function Register(data: RegisterDto){
    const response = await api.post<RegisterResponse>('/auth/register', data)
    return response.data;
}

export async function Login(data: LoginDto){
    const response = await api.post<RegisterResponse>('/auth/login', data)
    return response.data;
}

export async function UserProfile(){
    const response = await api.get<UserDto>('/user/profile/myself')
    return response.data;
}

export async function UpdateUserProfile(data: Partial<UserDto>){
    const response = await api.patch<UpdateUserDto>('/user/profile', data)
    return response.data;
}