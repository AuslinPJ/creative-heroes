import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Narco' },
  { id: 3, name: 'Bombasto' },
  { id: 4, name: 'Celeritas' },
  { id: 5, name: 'Magneta' },
 
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
