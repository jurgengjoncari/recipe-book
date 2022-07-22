import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  recipeSelected = new Subject<Recipe>()
  recipesChanged = new Subject<Recipe[]>()

<<<<<<< HEAD
  private recipes!: Recipe[]

  // private recipes: Recipe[] = [
  //     new Recipe('Carbonara',
  //       'A classic recipe for carbonara pasta on a table with ingredients',
  //       'https://foto.wuestenigel.com/wp-content/uploads/api2/a-classic-recipe-for-carbonara-pasta-on-table-with-ingredients.jpeg',
  //     []),
  //   new Recipe(
  //     'Tasty Schnitzel',
  //     'A super tasty Schnitzel - just awesome',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
  //       [
  //         new Ingredient('Meat', 1),
  //         new Ingredient('French Fries', 20)
  //       ]
  //   ),
  //   new Recipe(
  //     'Big Fat Burger',
  //     'What else you need to say?',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
  //     [
  //       new Ingredient('Buns', 2),
  //       new Ingredient('Meat', 1)
  //     ]
  //   ),
  //     new Recipe('Ceasar salad',
  //       'A Caesar salad is a green salad of romaine lettuce and croutons dressed with lemon juice, olive oil, egg, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper. In its original form, this salad was prepared and served tableside. ',
  //       'https://c.pxhere.com/photos/db/f5/appetizer_bowl_ceramic_chicken_cooking_crispy_cuisine_delicious-1529253.jpg!d',
  //     [])
  //   ]

=======
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
>>>>>>> ea751021e62118a6a48f14b4f09bcd06f483da9e
  getRecipes() {
      return this.recipes
    }
  
  getRecipe(id: number) {
    return this.recipes[id]
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
    this.recipesChanged.next(this.recipes.slice())
    console.log(this.recipes);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1)
    this.recipesChanged.next(this.recipes.slice())
  }

<<<<<<< HEAD
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes
    this.recipesChanged.next(this.recipes.slice())
  }
}
=======
  deleteIngredient(recipeId: number, ingredientId: number) {
    this.recipes[recipeId].ingredients.splice(ingredientId, 1)
    this.recipesChanged.next(this.recipes.slice())
  }
}
>>>>>>> ea751021e62118a6a48f14b4f09bcd06f483da9e
