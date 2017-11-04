import { IUserState } from './user.state';
import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from './user.actions';
import { User } from '../../models/user'

const initialUserState: IUserState = {
  user: new User(),
  token: '',
  isAuthenticated: false
}

function loginUser(state, action): IUserState {
  return Object.assign({}, state, {
    user: action.user,
    token: action.token,
    isAuthenticated: true
  });
}

function logoutUser(state, action): IUserState {
  return Object.assign({}, state, {
    user: new User(),
    token: '',
    isAuthenticated: false
  })
}

export function userReducer (state: IUserState = initialUserState, action): IUserState {
  switch (action.type) {
    case REGISTER_USER: {
      return state;
    }
    case LOGIN_USER: {
      return loginUser(state, action);
    }
    case LOGOUT_USER: {
      return logoutUser(state, action);
    }
    default: {
      return state
    }
  }
}