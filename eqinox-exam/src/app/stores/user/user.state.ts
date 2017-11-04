import { User } from '../../models/user';

export interface IUserState {
  user: User;
  token: string;
  isAuthenticated: boolean;
}