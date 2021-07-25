# Используем сервис для коммуникации компонентов

В сервис добавляем `recipeSelected` EventEmitter

```diff
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model'

export class RecipeService {
+ public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Bitch Lasagna', 'Made by PewDiePie', 'https://upload.wikimedia.org/wikipedia/ru/e/e1/Bitch_Lasagna.jpg'),
    new Recipe('Shawarma', 'Made by Yuri Khovansky', 'https://i.ytimg.com/vi/_vCsEZwGTjo/maxresdefault.jpg'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
```

И в компонентах используем:

1. В `recipe-item.component.ts` выбрасываем событие
```diff
import { Component, Input, OnInit } from '@angular/core'
import { Recipe } from '../recipe.model'
import { RecipeService } from '../../recipe.service'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe

+ constructor(private recipeService: RecipeService) {}

+ ngOnInit() {}

+ onSelected() {
+   this.recipeService.recipeSelected.emit(this.recipe);
+ }
}
```

2. В `recipes.component.ts` подписываемся на него и изменяем `selectedRecipe`
```diff
import { Component, OnInit } from '@angular/core'
import { Recipe } from './recipe-list/recipe.model'
import { RecipeService } from './recipe.service'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  selectedRecipe?: Recipe

+ constructor(private recipeService: RecipeService) {}

+ ngOnInit() {
+   this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
+     this.selectedRecipe = recipe;
+   })
  }
}
```
