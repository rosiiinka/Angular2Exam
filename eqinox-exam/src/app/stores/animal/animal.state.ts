import { Animal } from '../../models/animal';

export interface IAnimalState {
  animals: Animal[];
  filteredAnimals: Animal[];
  animal: Animal;
}