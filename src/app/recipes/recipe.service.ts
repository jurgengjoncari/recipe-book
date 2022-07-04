import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

    private recipes: Recipe[] = [
        new Recipe('Carbonara',
          'A classic recipe for carbonara pasta on a table with ingredients',
          'https://foto.wuestenigel.com/wp-content/uploads/api2/a-classic-recipe-for-carbonara-pasta-on-table-with-ingredients.jpeg',
        []),
      new Recipe(
        'Tasty Schnitzel',
        'A super tasty Schnitzel - just awesome',
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
          [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
          ]
      ),
      new Recipe(
        'Big Fat Burger',
        'What else you need to say?',
        'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
        ]
      ),
        new Recipe('Ceasar salad',
          'A Caesar salad is a green salad of romaine lettuce and croutons dressed with lemon juice, olive oil, egg, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper. In its original form, this salad was prepared and served tableside. ',
          'https://c.pxhere.com/photos/db/f5/appetizer_bowl_ceramic_chicken_cooking_crispy_cuisine_delicious-1529253.jpg!d',
        [])
      ]
  getRecipes() {
      return this.recipes.slice()
    }
}