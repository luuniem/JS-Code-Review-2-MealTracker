import { Component } from 'angular2/core';
import { Food } from './meal.models.ts';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
    </div>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Spaghetti", 0),
      new Food("Big Mac", 1),
      new Food("Fried Rice", 2)
    ]
  }
  foodWasSelected(clickedFood: Food): void{
    console.log('parent', clickedFood);
  }
}
