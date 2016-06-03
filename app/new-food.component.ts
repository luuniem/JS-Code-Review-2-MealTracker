import { Component, EventEmitter} from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
  <div class="food-form">
    <h3> Add Food Item: </h3>
    <input placeholder ="Name" class="col-sm-3 input-lg" #newName>
    <button (click)="addFood(newName)" class="btn-success btn-lg add-button"> Upload</button>
    </div>
  `
})

export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<String>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userName: HTMLInputElement){
    this.onSubmitNewFood.emit(userName.value);
    userName.value=""; //clears field
  }

}
