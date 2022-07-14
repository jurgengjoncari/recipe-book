import { formatCurrency } from '@angular/common';
import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from, Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @Output() ingredientAdded = new EventEmitter<Ingredient>()
  @ViewChild('form') shoppingListForm!: NgForm;
  subscription!: Subscription;
  editMode = false
  editedItemIndex!: number;
  editedItem!: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editMode = true
      this.editedItemIndex = index
      this.editedItem = this.shoppingListService.getIngredient(index)
      this.shoppingListForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  
  submitItem(form: NgForm) {
    const newIngredient = new Ingredient(form.value.name, form.value.amount)
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.shoppingListService.addIngredients(newIngredient)
    }
    this.clearForm()
  }

  clearForm() {
    this.editMode = false
    this.shoppingListForm.reset()
  }

  deleteItem() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex)
    this.clearForm()
  }
}
