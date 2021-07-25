# Добавляем ингредиенты в рецепты

1. Добавляем в модель `Recipe` ингредиенты. Теперь они обязательны при создании рецепта:
```diff
import { Ingredient } from '../../shared/ingredient.model'

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
+ public ingredients: Ingredient[];

  constructor(name: string, description: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
+   this.ingredients = ingredients;
  }
}
```

2. Добавляем в сервисе `recipe.service.ts` новые рецепты:
```diff
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model'
import { Ingredient } from '../shared/ingredient.model'

export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
+   new Recipe(
+     'Tasty Schnitzel',
+     'A super-tasty Schnitzel - just awesome!',
+     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
+     [
+       new Ingredient('Meat', 1),
+       new Ingredient('French Fries', 20)
+     ]
+   ),
+   new Recipe(
+     'Big Fat Burger',
+     'What else you need to say?',
+     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
+     [
+       new Ingredient('Buns', 2),
+       new Ingredient('Meat', 1)
+     ]
+   ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
```

3. Добавляем в шаблон ингредиенты:
`recipe-detail.component.html`
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
          <li><a href="#">To Shopping List</a></li>
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
-     Ingredients    
+     <ul class="list-group">
+       <li class="list-group-item" *ngFor="let ingredient of recipe.ingredients">{{ ingredient.name }} ({{ ingredient.amount }})</li>
+     </ul>
    </div>
  </div>
</ng-container>
```
