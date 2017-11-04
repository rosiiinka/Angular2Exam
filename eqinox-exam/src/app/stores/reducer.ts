import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { animalReducer } from './animal/animal.reducer';
import { statsReducer } from './stats/stats.reducer';
import { IAppState } from './IAppState';

export const reducer = combineReducers<IAppState>({
  users: userReducer,
  animals: animalReducer,
  stats: statsReducer
})