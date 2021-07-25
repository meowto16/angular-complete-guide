# Добавляем Shopping List сервис

`shopping-list.service.ts`
```ts
import { Ingredient } from '../shared/ingredient.model'

export class ShoppingListService {
  private ingredients: Ingredient[]  = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice()
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }
}
```

Внедряем сервис в компоненты. Компонент `shopping-list.edit.component.ts`
```diff
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
- @Output() onIngredientAdd = new EventEmitter<Pick<Ingredient, 'name' | 'amount'>>()

+ constructor(private shoppingListService: ShoppingListService) {}


  public handleAddIngredient(event: Event): void {
    event.preventDefault()
    const newIngredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value)
-   this.onIngredientAdd.emit(
-     new Ingredient(
-       this.nameInput.nativeElement.value,
-       this.amountInput.nativeElement.value
-     )
-   )
+   this.shoppingListService.addIngredient(newIngredient)
  }
}
```

`shopping-list.component.ts`.
```diff
import { Component, OnInit } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
- ingredients: Ingredient[]  = [
-   new Ingredient('Apples', 5),
-   new Ingredient('Tomatoes', 10)
- ];
+ ingredients: Ingredient[] = []

+ constructor(private shoppingListService: ShoppingListService) {}

+ handleIngredientAdd(ingredient: Ingredient) {
+   this.ingredients.push(ingredient)
+ }

+ ngOnInit() {
+   this.ingredients = this.shoppingListService.getIngredients()
+ }
}
```

Но сейчас приложение не будет до конца правильно работать, так как мы не эмитим событие, по которому меняем ингредиенты.
