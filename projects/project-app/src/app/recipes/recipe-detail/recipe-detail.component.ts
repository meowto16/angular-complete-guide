import { Component, Input } from '@angular/core'
import { Recipe } from '../recipe-list/recipe.model'
import { ShoppingListService } from '../../shopping-list/shopping-list.service'
import { Ingredient } from '../../shared/ingredient.model'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe?: Recipe

  constructor(private shoppingListService: ShoppingListService) {}

  handleAddIngredientsToShoppingList(event: Event, ingredients: Ingredient[]) {
    event.preventDefault()
    this.shoppingListService.addIngredients(ingredients)
  }
}
