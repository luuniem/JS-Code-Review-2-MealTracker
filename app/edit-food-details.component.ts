import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <div class="food-form">
      <h3> Edit Food Name: </h3>
      <input [(ngModel)]="food.name" class = "col-sm-4 input-lg food-form">
      <input [(ngModel)]="food.log" class = "col-sm-4 input-lg food-form">
      <input [(ngModel)]="food.calories" class = "col-sm-4 input-lg food-form">
    </div>
  `
})

export class EditFoodDetailsComponent {
  public food: Food;
}
