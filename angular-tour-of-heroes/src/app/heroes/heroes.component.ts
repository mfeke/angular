import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heros';
import { Hero } from '../heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero? :Hero;
  onSelect(hero:Hero){
    this.selectedHero=hero
  }
  heroes:Hero [] =[]
  // heroes = HEROES;
  

  constructor() { }

  ngOnInit(): void {
  //   selectedHero?:Hero;
  // onSelect(hero : Hero):{
  //   this.selectedHero = hero;
  // }
  }

}

