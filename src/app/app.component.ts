import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Windows' },
  { id: 3, name: 'Android' },
  { id: 4, name: 'Samsung' },
  { id: 5, name: 'Nokia' },
 
];
 
@Component({
  selector: 'app-root',
templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Creative';
      heroes = HEROES;
  selectedHero: Hero;
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
