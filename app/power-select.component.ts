import {Component} from 'angular2/core';

@Component({
    selector: 'power-select',
    templateUrl: 'app/power-select.html',
    inputs: ['power']
})
export class PowerSelectComponent {
    public power: string;
}
