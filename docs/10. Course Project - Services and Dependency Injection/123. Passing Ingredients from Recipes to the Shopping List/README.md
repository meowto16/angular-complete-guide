# Пробрасываем ингредиенты из рецептов в Shopping List

## Мое решение

1. Добавил новый метод в `shopping-list.service.ts`
```diff
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[]  = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice()
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

+ addIngredients(ingredients: Ingredient[]) {
+   this.ingredients.push(...ingredients)
+   this.ingredientsChanged.emit(this.ingredients.slice())
+ }
}
```

2. Добавил новый метод в `recipe-detail.component.ts`

```diff
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

+ constructor(private shoppingListService: ShoppingListService) {}

+ handleAddIngredientsToShoppingList(event: Event, ingredients: Ingredient[]) {
+   event.preventDefault()
+   this.shoppingListService.addIngredients(ingredients)
+ }
}
```

3. Повесил метод на клик по ссылке в `recipe-detail.component.html`
```diff
<ng-container *ngIf="!!recipe">
  <div class="row">
    <div class="col-xs-12">
      <img src="{{ recipe.imagePath }}" alt="{{ recipe.name }}" class="img-responsive img-rounded" style="max-height: 200px;">
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12">
      <h1>{{ recipe.name }}</h1>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12">
      <div class="btn-group" appDropdown>
        <button type="button" class="btn btn-primary dropdown-toggle">
          Manage Recipe <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
-         <li><a href="#">To Shopping List</a></li>        
+         <li><a href="#" (click)="handleAddIngredientsToShoppingList($event, recipe.ingredients)">To Shopping List</a></li>
          <li><a href="#">Edit Recipe</a></li>
          <li><a href="#">Delete Recipe</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12">
      {{ recipe.description }}
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12">
      <ul class="list-group">
        <li class="list-group-item" *ngFor="let ingredient of recipe.ingredients">{{ ingredient.name }} ({{ ingredient.amount }})</li>
      </ul>
    </div>
  </div>
</ng-container>
```

## Решение преподавателя

В целом такое же как и мое за одним исключением, он добавил `addIngredientsToShoppingList` метод в `recipe.service.ts`.
Мне кажется это излишним и не совсем понимаю смысл

`recipe.service.ts`
```diff
- import { EventEmitter } from '@angular/core';
+ import { EventEmitter, Injectable } from '@angular/core'; 
import { Recipe } from './recipe-list/recipe.model'
import { Ingredient } from '../shared/ingredient.model'

+ @Injectable()
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    ),
  ];
  
+ constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  
+ addIngredientsToShoppingList(ingredients: Ingredient[]) {
+   this.slService.addIngredients(ingredients);  
+ }
}
```
