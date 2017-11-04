import { IUserState } from './user/user.state';
import { IAnimalState } from './animal/animal.state';
import { IStatsState } from './stats/stats.state';

export interface IAppState {
  users: IUserState;
  animals: IAnimalState;
  stats: IStatsState;
}