import { IStatsState } from './stats.state';
import { Animal } from '../../models/animal';
import { GET_STATS } from './stats.actions';

const InitialStatsState: IStatsState = {
  animals: 0,
  users: 0
}

function getStats(state, action): IStatsState {
  console.log(action)
  return Object.assign({}, state, {
    animals: action.stats.animals,
    users: action.stats.users
  })
}

export function statsReducer(state: IStatsState = InitialStatsState, action): IStatsState {
  switch (action.type) {
    case GET_STATS: {
      return getStats(state, action);
    }
    default: {
      return state
    }
  }
}