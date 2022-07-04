import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    onIngredientAdded = new EventEmitter()

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ]

    getIngredients() {
        return this.ingredients
    }

    addIngredients(...ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients)
    }

    ingredientWasAdded = this.onIngredientAdded.emit()
}