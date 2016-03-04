import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/hello.html',
    directives: [HeroDetailComponent]
})
export class AppComponent {
    title = 'Tour of Heroes';
    heroes = HEROES;
    myHero = this.heroes[0];
    yourName: string = '';

    selectedHero: Hero;
    onSelect(hero: Hero) { this.selectedHero = hero; }
}
var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice", "power": "x-ray" },
    { "id": 12, "name": "Narco", "power": "flight" },
    { "id": 13, "name": "Bombasto", "power": "strength" },
    { "id": 14, "name": "Celeritas", "power": "agility" },
    { "id": 15, "name": "Magneta", "power": "magic" }
];