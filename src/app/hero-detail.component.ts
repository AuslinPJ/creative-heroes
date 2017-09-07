import { Component , Input} from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'hero-detail',
  template:`<div class="center" *ngIf="hero" >
     
      
      <div>
       Details for id {{hero.id}}
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
        `,
       styles: [`
        .center {
           
            text-align: center;
      }        

        `]
})
export class HeroDetailComponent {
@Input() hero: Hero;
}
