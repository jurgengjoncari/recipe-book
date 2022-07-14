import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    onIngredientAdded = new Subject<Ingredient[]>()
    startedEditing = new Subject<number>()

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ]

    getIngredients() {
        return this.ingredients
    }

    getIngredient(index: number) {
        return this.ingredients[index]
    }

    addIngredients(...ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients)
    }
}