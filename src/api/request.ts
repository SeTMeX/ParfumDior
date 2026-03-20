import api from './axios'
import type { LoginDto, RegisterDto, RegisterResponse } from './types';


export async function Register(data: RegisterDto){
    const response = await api.post<RegisterResponse>('/auth/register', data)
    return response.data;
}

export async function Login(data: LoginDto){
    const response = await api.post<RegisterResponse>('/auth/login', data)
    return response.data;
}