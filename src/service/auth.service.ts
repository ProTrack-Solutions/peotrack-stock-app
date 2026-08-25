import { LoginRequest, LoginResponse } from "@/interfaces/auth.interface";
import { apiClient } from "./api.service";

export const Login = async (params: LoginRequest): Promise<LoginResponse> => {
  const response = apiClient.post<LoginResponse>("/auth/login", params);
  return (await response).data;
};
