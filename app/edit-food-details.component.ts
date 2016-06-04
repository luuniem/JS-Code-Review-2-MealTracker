import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'edit-food-details',
  inputs: ['food'],
  templateUrl: './app/edit-food-details.component.html'
})

export class EditFoodDetailsComponent {
  public food: Food;
}
