import { Component, EventEmitter } from 'angular2/core';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { Food } from './food.model';

@Component ({
  selector: 'food-display',
  inputs: ['food'],
  directives: [EditFoodDetailsComponent],
  templateUrl: './app/food.component.html'
})

export class FoodComponent {
  public food: Food;
}
