import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel',
         'A super-tasty Schnitzel - just awesome!',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/220px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG', 
          [
              new Ingredient('Meat', 1),
              new Ingredient('Pire', 1),
              new Ingredient('Salad', 1)
          ]),
        new Recipe('Lasange',
         'Just like the one Garfield likes!',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Lasagne_-_stonesoup.jpg/1024px-Lasagne_-_stonesoup.jpg',
           [
              new Ingredient('Lasange Pages', 1),
              new Ingredient('Tommato Souce', 1),
              new Ingredient('Cheese', 1)
          ])
      ];

      constructor(private slService: ShoppingListService){}

      getRecipes() {
      return this.recipes.slice();
    }

    addIngredientToSL(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}