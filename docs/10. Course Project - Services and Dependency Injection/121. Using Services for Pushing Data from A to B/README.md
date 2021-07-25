# Используем сервисы для проброса данных из A в B

Правильный вариант - это эмиттить данные из сервиса:

```diff
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

export class ShoppingListService {
+ ingredientsChanged = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[]  = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice()
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
+   this.ingredientsChanged.emit(this.ingredients)
  }
}
```

И затем ловить в компоненте:
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
  ingredients: Ingredient[] = []

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()
+   this.shoppingListService.ingredientsChanged.subscribe((ingredients) => {
+     this.ingredients = ingredients
+   })
  }
}

```
