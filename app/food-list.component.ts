import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent} from './food.component'
import { Food } from './food.model';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { NewFoodComponent } from './new-food.component';

@Component ({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodComponent, EditFoodDetailsComponent, NewFoodComponent],
  template: `
    <food-display *ngFor="#currentFood of foodList"
    (click)="foodClicked(currentFood)"
    [class.selected]="currentFood === selectedFood"
    [food]="currentFood">
    </food-display>
    <edit-food-details *ngIf="selectedFood" [food]="selectedFood">
    </edit-food-details>
    <new-food (onSubmitNewFood)="addFood($event)"></new-food>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood)
  }
  addFood(name: string): void {
    this.foodList.push(
      new Food(name, this.foodList.length)
    );
  }
}
