import { Component, EventEmitter} from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
  <div class="food-form">
    <h3> Add Food Item: </h3>
    <input placeholder ="Name" class="col-sm-3 input-lg" #newName>
    <input placeholder ="Log" class="col-sm-3 input-lg" #newLog>
    <input placeholder ="Calories" class="col-sm-3 input-lg" #newCalories>
    <button (click)="addFood(newName, newLog, newCalories)" class="btn-success btn-lg add-button"> Upload</button>
    </div>
  `
})

export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<String>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userName: HTMLInputElement, userLog: HTMLInputElement, userCalories: HTMLInputElement){
    this.onSubmitNewFood.emit(userName.value);
    this.onSubmitNewFood.emit(userLog.value);
    this.onSubmitNewFood.emit(userCalories.value);
    userName.value=""; //clears field
    userLog.value="";
    userCalories.value="";
  }

}
