import { Recipe } from "./recipe.model";

export class RecipeService {
    recipes: Recipe[] = [
        new Recipe('Carbonara',
          'A classic recipe for carbonara pasta on a table with ingredients',
          'https://foto.wuestenigel.com/wp-content/uploads/api2/a-classic-recipe-for-carbonara-pasta-on-table-with-ingredients.jpeg'),
        new Recipe('Ceasar salad',
          'A Caesar salad is a green salad of romaine lettuce and croutons dressed with lemon juice, olive oil, egg, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper. In its original form, this salad was prepared and served tableside. ',
          'https://c.pxhere.com/photos/db/f5/appetizer_bowl_ceramic_chicken_cooking_crispy_cuisine_delicious-1529253.jpg!d')
      ]
    
}