import { IAnimalState } from './animal.state';
import { Animal } from '../../models/animal';
import { ADD_ANIMAL, FILTER_ANIMALS, GET_ALL_ANIMALS, GET_BY_ID, CREATE_REVIEW, LIKE_ANIMAL } from './animal.actions';

const InitialAnimalState: IAnimalState = {
  animals: [],
  filteredAnimals: [],
  animal: new Animal()
}

function addAnimal(state, action): IAnimalState {
  return Object.assign({}, state, {
    animals: [...state.animals, action.animal],
    filteredAnimals: [...state.animals, action.animal]
  });
}

function getAllAnimals(state, action): IAnimalState {
  return Object.assign({}, state, {
    animals: action.animals,
    filteredAnimals: action.animals
  })
}

function filterAnimals(state, action): IAnimalState {
  return Object.assign({}, state, {
    filteredAnimals: state.animals.filter(c => {
      return c.name.toLowerCase().indexOf(action.searchText.toLowerCase()) > -1
    })
  })
}

function getById(state, action): IAnimalState {
  return Object.assign({}, state, {
    animal: action.animal
  })
}

function createReview(state, action): IAnimalState {
  let car = state.car;
  let review = action.review;
  if (state.car.reviews) {
    return Object.assign({}, state, {
      car: { ...car, reviews: [...car.reviews, review] }
    })
  } else {
    return Object.assign({}, state, {
      car: { ...car, reviews: [review] }
    })
  }
}

function likeCar(state, action): IAnimalState {
  return Object.assign({}, state, {
    car: action.car
  })
}

export function animalReducer(state: IAnimalState = InitialAnimalState, action): IAnimalState {
  switch (action.type) {
    case ADD_ANIMAL: {
      return addAnimal(state, action);
    }
    case GET_ALL_ANIMALS: {
      return getAllAnimals(state, action);
    }
    case FILTER_ANIMALS: {
      return filterAnimals(state, action);
    }
    case GET_BY_ID: {
      return getById(state, action);
    }
    case CREATE_REVIEW: {
      return createReview(state, action);
    }
    case LIKE_ANIMAL: {
      return likeCar(state, action);
    }
    default: {
      return state
    }
  }
}