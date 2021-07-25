import { Component, ElementRef, ViewChild } from '@angular/core'
import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service'

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInput!: ElementRef
  @ViewChild('amountInput') amountInput!: ElementRef

  constructor(private shoppingListService: ShoppingListService) {}


  public handleAddIngredient(event: Event): void {
    event.preventDefault()
    const newIngredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value)
    this.shoppingListService.addIngredient(newIngredient)
  }
}
