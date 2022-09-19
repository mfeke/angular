import { Injectable } from '@angular/core';
import { Hero } from './heroes';
import { HEROES } from './mock-heros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[]{
    return HEROES
  }

  constructor() { }
}

