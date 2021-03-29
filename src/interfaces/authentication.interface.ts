export interface SignUpRequest {
  userName: string,
  password: string,
  createdTime: Date
}

export interface SignUpResponse {
  result: string
}

export interface LoginRequest {
  userName: string,
  password: string
}

export interface LoginResponse {
  result: string
}
