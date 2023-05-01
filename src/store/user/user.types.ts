export interface User {
  id: string;
  username: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}

export interface UserInitialState {
  data: User | null;
  isAuthenticated: boolean;
}

export interface AuthResponse {
  id: string;
  username: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}
