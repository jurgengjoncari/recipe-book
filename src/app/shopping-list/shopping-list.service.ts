import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    onIngredientAdded = new Subject<Ingredient[]>()

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
}