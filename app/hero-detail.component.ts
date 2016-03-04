import {Component} from 'angular2/core';
import {PowerSelectComponent} from './power-select.component';
import {Hero} from './hero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/detail.html',
    directives: [PowerSelectComponent],
    inputs: ['hero']
})
export class HeroDetailComponent {
    hero: Hero;
    result: any;
}

