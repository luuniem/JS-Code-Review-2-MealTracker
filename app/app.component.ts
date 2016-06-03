import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component'
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <food-list [foodList]="foods" (onFoodSelect)="foodWasSelected($event)">
      </food-list>
    </div>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Spaghetti", "Ate a lot!", 320, 0),
      new Food("Big Mac","Too many calories personally", 540, 1),
      new Food("Fried Rice"," This is the stuff!", 400, 2)
    ];
  }
  foodWasSelected(clickedFood: Food): void{
  }
}
