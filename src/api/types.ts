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

export interface ProductDto {
    price: number,
    name: string,
    category: string
}

export interface GetAllProductsResponse {
    data: Product[],
    meta: MetaResponse
}

export interface Product {
  id: string;
  createdAt: string; // or Date if you parse it
  updatedAt: string; // or Date
  deletedAt: string | null;
  name: string;
  price: number;
  category: string;
}

export interface MetaResponse {
    page: string,
    take: string,
    itemCount: number,
    pageCount: number,
    hasPreviousPage: boolean,
    hasNextPage: boolean
}

