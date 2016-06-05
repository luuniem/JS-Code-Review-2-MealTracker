import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe ({
  name: "healthy",
  pure: false
})

export class HealthyPipe implements PipeTransform {
  transform(input: Food[], args){
    var healthy = args[0];
    if( healthy === "healthy"){
      return input.filter(function(food){
        return food.calories < 501;
      });
    } else if (healthy === "unhealthy") {
      return input.filter(function(food){
        return food.calories > 500;
      });
    } else {
      return input;
    }
  }
}
