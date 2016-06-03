import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent} from './food.component'
import { Food } from './food.model';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { NewFoodComponent } from './new-food.component';
import { HealthyPipe } from './healthy.pipe';

@Component ({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [HealthyPipe],
  directives: [FoodComponent, EditFoodDetailsComponent, NewFoodComponent],
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="all" selected="selected">Show All</option>
      <option value="healthy">Healthy Foods</option>
      <option value="unhealthy">Unhealthy Foods</option>
    </select>
    <food-display *ngFor="#currentFood of foodList | healthy:filterHealthy"
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
  public filterHealthy: string = "all";
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood)
  }
  addFood(name: string, log: string, calories: number): void {
    this.foodList.push(
      new Food(name, log, calories, this.foodList.length)
    );
  }
  onChange(filterOption){
    this.filterHealthy = filterOption;
  }
}
