import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { EditFoodDetailsComponent} from './edit-food-details.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  templateUrl:'./app/app.component.html'
})

export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Spaghetti", "Good stuff", 400),
      new Food("Big Mac","Semi good stuff", 520),
      new Food("Honey Cheese Sticks","Uber Delicious", 450),
      new Food("Orange Strawberries", "Super sour", 150)
    ];
  }
  foodWasSelected(clickedFood: Food): void{
  }
}
