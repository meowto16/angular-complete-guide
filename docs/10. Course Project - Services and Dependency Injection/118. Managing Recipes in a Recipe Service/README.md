# Управляем рецептами в Recipe сервисе

Вынесем из `recipe-list.component.ts` рецепты в сервис:

`recipe-list.component.ts`
```diff
- export class RecipeListComponent implements {
+ export class RecipeListComponent implements OnInit {
  @Output() onSelectRecipe = new EventEmitter<Recipe>()
- recipes: Recipe[] = [
-   new Recipe('Bitch Lasagna', 'Made by PewDiePie', 'https://upload.wikimedia.org/wikipedia/ru/e/e1/Bitch_Lasagna.jpg'),
-   new Recipe('Shawarma', 'Made by Yuri Khovansky', 'https://i.ytimg.com/vi/_vCsEZwGTjo/maxresdefault.jpg'),
- ];
+ recipes: Recipe[] = [];

+ constructor(private recipeService: RecipeService) {}

+ ngOnInit() {
+   this.recipes = this.recipeService.getRecipes();
+ }

  onSelectActiveRecipe(recipe: Recipe) {
    this.onSelectRecipe.emit(recipe);
  }
}
```

`recipe.service.ts`
```ts
import { Recipe } from './recipe-list/recipe.model'

export class RecipeService {
  private recipes: Recipe[] = [ // Делаем поле приватным, чтобы его нельзя было изменить
    new Recipe('Bitch Lasagna', 'Made by PewDiePie', 'https://upload.wikimedia.org/wikipedia/ru/e/e1/Bitch_Lasagna.jpg'),
    new Recipe('Shawarma', 'Made by Yuri Khovansky', 'https://i.ytimg.com/vi/_vCsEZwGTjo/maxresdefault.jpg'),
  ];

  getRecipes() {
    return this.recipes.slice(); // Возвращаем копию массива, а не ссылку. Чтобы опять же, его нельзя было изменить напрямую
  }
}
```
