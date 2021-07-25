import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model'

export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Bitch Lasagna', 'Made by PewDiePie', 'https://upload.wikimedia.org/wikipedia/ru/e/e1/Bitch_Lasagna.jpg'),
    new Recipe('Shawarma', 'Made by Yuri Khovansky', 'https://i.ytimg.com/vi/_vCsEZwGTjo/maxresdefault.jpg'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
