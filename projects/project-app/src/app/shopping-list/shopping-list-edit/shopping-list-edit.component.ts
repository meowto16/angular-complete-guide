import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core'
import { Ingredient } from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInput!: ElementRef
  @ViewChild('amountInput') amountInput!: ElementRef

  @Output() onIngredientAdd = new EventEmitter<Pick<Ingredient, 'name' | 'amount'>>()

  public handleAddIngredient(event: Event): void {
    event.preventDefault()

    this.onIngredientAdd.emit(
      new Ingredient(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
      )
    )
  }
}
