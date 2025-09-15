export enum ErrorMessageUser {
  NOT_FOUND = 'User not found',
  ALREADY_EXISTS = 'User already exists',
}

export type User = {
  supabaseId: string;
  email?: string;
  password?: string;
  verified?: boolean;
  permissions?: string[];
  role?: string;
  subscriptionPlan?: string;
  profileImg?: string;
  info?: UserInfo;
};

export type UserInfo = Record<string, any>;
