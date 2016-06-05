import { Component } from 'angular2/core';
import { Food } from './food.model';
import { NewFoodComponent } from './new-food.component';

@Component ({
  selector: 'edit-food-details',
  inputs: ['food'],
  directives: [NewFoodComponent],
  templateUrl: './app/edit-food-details.component.html'
})

export class EditFoodDetailsComponent {
  public food: Food;
}
