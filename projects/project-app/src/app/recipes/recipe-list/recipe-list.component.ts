import { Component, EventEmitter, Output } from '@angular/core'
import { Recipe } from './recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() onSelectRecipe = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('Bitch Lasagna', 'Made by PewDiePie', 'https://upload.wikimedia.org/wikipedia/ru/e/e1/Bitch_Lasagna.jpg'),
    new Recipe('Shawarma', 'Made by Yuri Khovansky', 'https://i.ytimg.com/vi/_vCsEZwGTjo/maxresdefault.jpg'),
  ];

  onSelectActiveRecipe(recipe: Recipe) {
    this.onSelectRecipe.emit(recipe);
  }
}
