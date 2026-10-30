export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface AuthSession {
  user: User;
  accessToken: string;
  expiresAt: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

export interface UpdateProfileInput {
  name: string;
  email: string;
  avatarUrl?: string | null;
}

export interface ChangePasswordInput {
  currentPassword: string;
  newPassword: string;
}
