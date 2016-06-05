System.register(['angular2/core', './food-list.component', './food.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, food_list_component_1, food_model_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (food_list_component_1_1) {
                food_list_component_1 = food_list_component_1_1;
            },
            function (food_model_1_1) {
                food_model_1 = food_model_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.foods = [
                        new food_model_1.Food("Spaghetti", "Good stuff", 400),
                        new food_model_1.Food("Big Mac", "Semi good stuff", 520),
                        new food_model_1.Food("Honey Cheese Sticks", "Uber Delicious", 450),
                        new food_model_1.Food("Orange Strawberries", "Super sour", 150)
                    ];
                }
                AppComponent.prototype.foodWasSelected = function (clickedFood) {
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [food_list_component_1.FoodListComponent],
                        templateUrl: './app/app.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map