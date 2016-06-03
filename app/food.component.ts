import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-display',
  inputs: ['food'],
  template: `
    <h3> {{ food.name }} </h3>
    <h4> {{ food.log }} </h4>
    <h4> {{ food.calories }} </h4>
  `
})

export class FoodComponent {
  public food: Food;
}
