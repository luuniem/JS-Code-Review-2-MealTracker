import { Component, EventEmitter} from 'angular2/core';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { Food } from './food.model';

@Component ({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  templateUrl: './app/new-food.component.html'
})

export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  createFood(userName: HTMLInputElement, userLog: HTMLInputElement, userCalories: HTMLInputElement) {
    var newFood = new Food(userName.value, userLog.value, parseInt(userCalories.value));
    this.onSubmitNewFood.emit(newFood);
    userName.value=""; //clears field
    userLog.value="";
    userCalories.value="";
  }
}
