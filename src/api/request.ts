import api from "./axios";
import type {
  LoginDto,
  RegisterDto,
  RegisterResponse,
  UserDto,
  UpdateUserDto,
  ProductDto,
  GetAllProductsResponse,
  Product,
} from "./types";

export async function Register(data: RegisterDto) {
  const response = await api.post<RegisterResponse>("/auth/register", data);
  return response.data;
}

export async function Login(data: LoginDto) {
  const response = await api.post<RegisterResponse>("/auth/login", data);
  return response.data;
}

export async function UserProfile() {
  const response = await api.get<UserDto>("/user/profile/myself");
  return response.data;
}

export async function UpdateUserProfile(data: UpdateUserDto){
    const response = await api.patch<UserDto>('/user/profile', data)
    return response.data;
}

export async function createProduct(data: ProductDto) {
  const response = await api.post<Product>("/product", data);
  return response.data;
}

export async function getProducts(
  page = 1,
  take = 20,
  order: "ASC" | "DESC" = "ASC",
) {
  const response = await api.get<GetAllProductsResponse>(
    `/product?order=${order}&page=${page}&take=${take}`,
  );
  return response.data;
}

export async function updateProducts(data: ProductDto, productId: string) {
  const response = await api.patch<Product>(`/product/${productId}`, data);
  return response.data;
}

export async function getProductById(productId: string) {
  const response = await api.get<Product>(`/product/find/${productId}`);
  return response.data;
}
