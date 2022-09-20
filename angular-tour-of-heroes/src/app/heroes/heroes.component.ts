import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes';
import { HeroService } from '../hero.service';
import { MessagesComponent } from '../messages/messages.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero? :Hero;
  heroes: Hero[] = [];

  
  
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
        
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private heroService: HeroService,
    private http: HttpClient,
  private messageService: MessageService
    
   ) { }
   

  ngOnInit(): void {
    this.getHeroes();
  
  }
 

}

