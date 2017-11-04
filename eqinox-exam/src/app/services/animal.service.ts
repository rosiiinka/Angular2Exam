import { Injectable } from '@angular/core';

import { Animal } from '../models/animal';
import { HttpService } from './http.service';

@Injectable()
export class AnimalService {
  constructor(private httpService: HttpService) { }

  add(car: Animal) {
    return this.httpService
      .post('/animals/create', car, )
      .map(res => res.json());
  }

  getAll() {
    return this.httpService
      .get('/animals/all')
      .map(res => res.json())
  }

  getById(id) {
    return this.httpService
      .authorizedGet('/animals/details/'+ id)
      .map(res => res.json())
  }
    
  createReactionById(id, reaction) {
    return this.httpService
      .post(`/animals/details/${id}/reaction`, reaction)
      .map(res => res.json())
  }

  createCommentById(id, comment) {
    return this.httpService
      .post(`/animals/details/${id}/comments/create`, comment)
      .map(res => res.json())
  }

  getCommentsById(id) {
    return this.httpService
      .authorizedGet(`/animals/details/${id}/comments`)
      .map(res => res.json())
  }

  getMineAnimals() {
    return this.httpService
      .authorizedGet(`/animals/mine`)
      .map(res => res.json())
  }

  deleteById(id) {
    return this.httpService
      .post(`/animals/delete/${id}`, null)
      .map(res => res.json())
  }
}