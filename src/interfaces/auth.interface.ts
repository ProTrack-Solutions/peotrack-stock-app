export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  has_company: boolean;
  expires_in: number; // segundos
  token_type: string; // "Bearer"
}

export interface LoginRequest {
  email: string;
  password: string;
  aud: string;
}
