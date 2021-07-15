# Работаем над ShoppingListComponent

Пока просто добавили верстку
```angular2html
<div class="row">
  <div class="col-xs-10">
    <app-shopping-list-edit></app-shopping-list-edit>
    <hr>
    <ul class="list-group">
      <li class="list-group-item">
        <a href="#" style="display: block; width: 100%; height: 100%; cursor: pointer;">Ingredient</a>
      </li>
    </ul>
  </div>
</div>
```

и массив ingredients
```ts
ingredients = [];
```
